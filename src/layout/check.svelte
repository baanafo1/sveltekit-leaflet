<script lang="ts">
	import { getContext } from 'svelte';
	import isSidebarOpen  from './test.svelte'; // Adjust the import as needed
	import { get } from 'svelte/store';
	import L from 'leaflet';

	let baseLayers = {
		/* Define your base layers */
	};
	let overlays = {
		/* Define your overlay layers */
	};
	let map: L.Map | undefined;

    export let data;
	const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
	map = getMap();

	$: sidebarOpen = data.get(isSidebarOpen);
</script>

{#if sidebarOpen}
	<div class="layer-sidebar">
		<h2>Base Layers:</h2>
		{#each Object.entries(baseLayers) as [name, layer]}
			<div>
				<input
					type="radio"
					name="baseLayer"
					checked={map.getBaseLayer() === layer}
					on:change={() => map.setBaseLayer(layer)}
				/>
				<label for={name}>{name}</label>
				{#if layer.constructor === L.TileLayer && layer.options && layer.options.preview}
					<img src={layer.options.preview} alt={name + ' preview'} />
				{/if}
			</div>
		{/each}

		<h2>Overlay Layers:</h2>
		{#each Object.entries(overlays) as [name, layer]}
			<div>
				<input
					type="checkbox"
					checked={map.hasLayer(layer)}
					on:change={() => (map.hasLayer(layer) ? map.removeLayer(layer) : map.addLayer(layer))}
				/>
				<label for={name}>{name}</label>
				{#if layer.constructor === L.TileLayer && layer.options && layer.options.preview}
					<img src={layer.options.preview} alt={name + ' preview'} />
				{/if}
			</div>
		{/each}
	</div>
{/if}
