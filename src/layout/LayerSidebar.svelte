<script lang="ts">
	import L from 'leaflet';
	import { getContext, onMount } from 'svelte';
	let map: L.Map | undefined;

	const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
	map = getMap();
	const layerControl = getContext('controlLayer');
	onMount(() => {
		if (map) {
			console.log('this is me at kentucky');

			const zoomControl = document.getElementsByClassName(
				'leaflet-top leaflet-left'
			) as HTMLCollectionOf<HTMLElement>;
				const anotherControl = document.querySelector('.leaflet-control-zoom.leaflet-bar.leaflet-control')
				console.log(anotherControl);
				const targetDiv = document.querySelector('.leaflet-top.leaflet-right')
				console.log(targetDiv);
			if (zoomControl) {
				// console.log(zoomControl);
				console.log(layerControl, "the man")
				console.log('i found myself in kentucky');
			}
			
			if (anotherControl && targetDiv) {
				targetDiv.appendChild(anotherControl);
				// console.log('i found myself in kentucky');
			}
				const container = L.DomUtil.create('div', 'custom-container');
				container.style.display = 'flex';
				container.style.flexDirection = 'column';
				container.style.zIndex = '1000';			
		}
	});
</script>
