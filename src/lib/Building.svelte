<script lang="ts">
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import L from 'leaflet';

  export let latLngs: L.LatLngExpression[];
  export let color: string = 'blue';

  let polygon: L.Polygon | undefined;

  const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
  const map = getMap();

  setContext('layer', {
    getLayer: () => polygon
  });

  onMount(() => {
    if (map) {
      polygon = L.polygon(latLngs, {
        color: color
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
