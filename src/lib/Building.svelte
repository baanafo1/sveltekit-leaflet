<script lang="ts">
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import L from 'leaflet';


  export let latLngs: L.LatLngExpression[];
  export let color: string;
  export let opacity: number;

  let polygon: L.Polygon | undefined;

  const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
  const map = getMap();

  setContext('layer', {
    getLayer: () => polygon
  });

  onMount(() => {
    if (map) {
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
</script>

<div>
  {#if polygon}
    <slot />
  {/if}
</div>
