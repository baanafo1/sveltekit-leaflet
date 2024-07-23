<script lang="ts">
	import { onMount } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	let mapContainer: string | HTMLElement;

	onMount(() => {
		const map = L.map(mapContainer).setView([51.505, -0.09], 13);

		// Add a tile layer
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors'
		}).addTo(map);

		// Add zoom control
		const zoomControl = L.control
			.zoom({
				position: 'topright' // Position it in the same corner as the layer control
			})
			.addTo(map);

		// Add layer control
		const baseLayers = {
			OpenStreetMap: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
		};

		const overlays = {
			Marker: L.marker([51.5, -0.09])
		};

		const layerControl = L.control
			.layers(baseLayers, overlays, {
				collapsed: false, // Keep it open
				position: 'topright' // Position it in the same corner as the zoom control
			})
			.addTo(map);

		// Move the controls into the same div
		map.on('load', () => {
			// Create a container div for both controls
			const container = L.DomUtil.create('div', 'custom-container');
			container.style.display = 'flex'; // Arrange items in a row or column as needed
			container.style.flexDirection = 'column'; // Stack items vertically

			// Get the zoom control and layer control elements
			const zoomControlElement = zoomControl.getContainer();
			const layerControlElement = layerControl.getContainer();

			// Append controls to the new container
			if (zoomControlElement && layerControlElement) {
				container.appendChild(zoomControlElement);
				container.appendChild(layerControlElement);
			}

			// Append the new container to the map
			map.getContainer().appendChild(container);
		});
	});
</script>

<div id="map" bind:this={mapContainer}></div>

<style>
	#map {
		width: 100%;
		height: 100vh;
	}

	.custom-container {
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 1000; /* Ensure it's above map elements */
	}
</style>
