<script lang="ts">
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import L from 'leaflet';


  // the next three lines of code declare Building.svelte props
  export let latLngs: L.LatLngExpression[];
  export let color: string;
  export let opacity: number;

  let polygon: L.Polygon | undefined;

  // this line below is a destructuring assignment which extract getMap from
  // the results of calling getContext('map');
  // with type annotation indicating getMap is expected to be a function that
  // returns an L.map object or undefined
  // SEE seContext in Leaflet.svelte for more 
  const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
  const map = getMap();


  // we setContext with the key 'layer' which could be used by other svelte 
  // components such as Popup.svelte
  setContext('layer', {
    getLayer: () => polygon
  });

  
  // we use the onMount lifecycle function passing in the callback function -->
  // (to check if L.map object is returnd;)
  // if TRUE, the we add a polygon feature specifying the required latLngs
  // and other optional attributes
  // an finally adding it to the map object
  onMount(() => {
    if (map) {
      polygon = L.polygon(latLngs, {
        color: color,
        fillOpacity: opacity
      }).addTo(map);
    }
  });

  // the line below is used to remove the polygons from the leaflet
  // map when it components are being destroyed
  onDestroy(() => {
    polygon?.remove();
    polygon = undefined;
  });
</script>


<!--This component is declared so that other components such as Popup.svelte
 can render their content on it(Building.svelte)  -->
<div>
  {#if polygon}
    <slot />
  {/if}
</div>
