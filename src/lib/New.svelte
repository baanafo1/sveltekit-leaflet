<script lang="ts">
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';

  // Declare Building.svelte props
  export let wkt: string; // WKT string representing the polygon geometry
  export let color: string;
  export let opacity: number;

  let polygon: L.Polygon | undefined;
  const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
  const map = getMap();

  setContext('layer', {
    getLayer: () => polygon
  });

  onMount(() => {
    if (map && wkt) {
      // Parse WKT string to Leaflet polygon
      const latLngs = parseWKTToLatLngs(wkt);

      polygon = L.polygon(latLngs, {
        color: color,
        fillOpacity: opacity
      }).addTo(map);
    }
  });

  onDestroy(() => {
    polygon?.remove();
    polygon = undefined;
  });

  // Function to parse WKT to Leaflet LatLngs
  function parseWKTToLatLngs(wkt: string): L.LatLngExpression[] {
    // Example of parsing WKT for Polygon (you may need to adjust for other geometries)
    const matches = wkt.match(/\(\((.+?)\)\)/);
    if (!matches || matches.length < 2) return [];

    const coords = matches[1].split(',').map(coord => {
      const [lng, lat] = coord.trim().split(' ');
      return [Number(lat), Number(lng)];
    });

    return coords.map(coord => L.latLng(coord[0], coord[1]));
  }
</script>

<style>
  /* Add any custom styles here */
  div {
    width: 100%;
    height: 100%;
  }
</style>

<div>
  {#if polygon}
    <slot />
  {/if}
</div>
