<script lang="ts">
	import { onMount, onDestroy, getContext } from 'svelte';
	import L from 'leaflet';

	let popup: L.Popup | undefined;
	let popupElement: HTMLElement;

	let open = false;

	// this line below is a destructuring assignment which extract getMap from
	// the results of calling getContext('map');
	// with type annotation indicating getMap is expected to be a function that
	// returns an L.map object or undefined
	// SEE seContext in Leaflet.svelte for more
	const { getLayer }: { getLayer: () => L.Layer | undefined } = getContext('layer');
	const layer = getLayer();

	onMount(() => {
		popup = L.popup().setContent(popupElement);

		if (layer) {
			layer.bindPopup(popup);
			layer.on('popupopen', () => (open = true));
			layer.on('popupclose', () => (open = false));
		}
	});

	onDestroy(() => {
		layer?.unbindPopup();
		popup?.remove();
		popup = undefined;
	});
</script>

<div bind:this={popupElement}>
	{#if open}
		<slot />
	{/if}
</div>
