<script lang="ts">
	import { onMount, onDestroy, setContext, createEventDispatcher, tick } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	export let bounds: L.LatLngBoundsExpression | undefined = [
        [6.660765102547523, -1.562855023480884],
        [6.673159833331206, -1.5713711427654247],
      ];
	export let view: L.LatLngExpression | undefined = undefined;
	export let zoom: number | undefined = undefined;
	export let defaultLayerUrl: string;
	export let optionalLayerUrl: string;
	export let noLayerUrl: string;
	export let overlayLayerUrl: string;

	// Create an event dispatcher
	const dispatch = createEventDispatcher();

	let map: L.Map | undefined;
	let mapElement: HTMLElement;
	let baseMaps: Record<string, L.TileLayer>;
	let overlayMaps: Record<string, L.TileLayer>; // New variable for overlay maps

	onMount(() => {
		// Check if bounds and zoom or view props are set, else throw an error
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		map = L.map(mapElement)
			// Example to expose map events to parent components:
			// When the map is zoomed a custom event with the name 'zoom' is dispatched or created
			// and passed the original leaflet zoom event object to it through the argument 'e'
			.on('zoom', (e) => dispatch('zoom', e))
			.on('popupopen', async (e) => {
				await tick();
				e.popup.update();
			});

		// Define tile layers
		const defaultTile = L.tileLayer(defaultLayerUrl, {
			maxZoom: 20,
			attribution: '© OpenStreetMap'
		});

		const secondaryTile = L.tileLayer(optionalLayerUrl, {
			minZoom: 0,
			maxZoom: 20,
			subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
		});

		const noLayerTile = L.tileLayer(noLayerUrl, {
			maxZoom: 20,
			subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
		});

		// Define the overlay layer
		const overlayTile = L.tileLayer(overlayLayerUrl, {
			tms: true,
			opacity: 1.0,
			attribution: '© OpenStreetMap | Department of Geomatic Eng. KNUST',
			minZoom: 13,
			maxZoom: 20
		});

		baseMaps = {
			OpenStreetMap: defaultTile,
			'Hybrid Image': secondaryTile,
			'Image Overlay': overlayTile,
			'Background off': noLayerTile
		};

		overlayMaps = {
			Layer: overlayTile
		};

		defaultTile.addTo(map);

		overlayTile.addTo(map);


	});

	onDestroy(() => {
		map?.remove();
		map = undefined;
	});

	setContext('map', {
		getMap: () => map
	});

	setContext('baseMaps', {
		getBaseMaps: () => baseMaps
	});

	// Update map view based on bounds or view and zoom props
	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
		} else if (view && zoom) {
			map.setView(view, zoom);
		}
	}
</script>


<style>
	.w-full-h-full {
		min-height: 88vh;
	}
</style>

<div class="w-full-h-full" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>
