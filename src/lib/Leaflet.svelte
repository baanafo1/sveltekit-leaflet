<script lang="ts">
	import { onMount, onDestroy, setContext, createEventDispatcher, tick } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	// the next three lines of code declare Leaflet.svelte props
	export let bounds: L.LatLngBoundsExpression | undefined = undefined;
	export let view: L.LatLngExpression | undefined = undefined;
	export let zoom: number | undefined = undefined;

	// creating an event dispatcher
	const dispatch = createEventDispatcher();

	// declaring some local variable an their type annotation
	let map: L.Map | undefined;
	let mapElement: HTMLElement;


	onMount(() => {
		// we check if the bound and zoom or view props are set, else throw an error
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		map = L.map(mapElement)
			// example to expose map events to parent components:
			// when the map is zoomed a custom event with the name 'zoom' is dispatched or created
			// and passed the original leaflet zoom event object to it throught the argument 'e'
			.on('zoom', (e) => dispatch('zoom', e))
			.on('popupopen', async (e) => {
				await tick();
				e.popup.update();
			});

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>`
		}).addTo(map);
	});

	
	// the line below is used to remove the Leaflet Map from the browser
  	// when it components are being destroyed
	onDestroy(() => {
		map?.remove();
		map = undefined;
	});

	// This sets getMap i.e the only property which is a function that returns a map or L.map
	setContext('map', {
		getMap: () => map
	});

	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
		} else if (view && zoom) {
			map.setView(view, zoom);
		}
	}
</script>

<div class="w-full h-full" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>
