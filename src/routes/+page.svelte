<script lang="ts">
	import '../app.css';
	import L, { type LatLngExpression } from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import Leaflet from '$lib/Leaflet.svelte';
	import Popup from '$lib/Popup.svelte';
	import Building from '$lib/Building.svelte';

	export let data;

	const featureClass = data.buildings;

	const buildingLatLng: Array<Array<LatLngExpression>> = [];

	featureClass.forEach((feature: any) => {
		const latLng: L.LatLngExpression[] = feature.geometry.coordinates.map((ring: any) =>
			ring.map((coord: any) => [coord[1], coord[0]])
		);
		buildingLatLng.push(latLng);
	});

	const initialView: LatLngExpression = [6.669, -1.5681];
	const markerLocations: Array<LatLngExpression> = [[6.6745, -1.5716]];
</script>

<div class="w-full h-screen">
	<Leaflet view={initialView} zoom={16}>
		{#each buildingLatLng as buildingCoordinates, index}
			<Building
				latLngs={buildingCoordinates}
				color={featureClass[index].properties.Number_of_ % 2 === 0 ? 'green' : 'red'}
				opacity={0.2}
			>
				<Popup>{featureClass[index].properties.Name}</Popup>
			</Building>
		{/each}
	</Leaflet>

</div>
