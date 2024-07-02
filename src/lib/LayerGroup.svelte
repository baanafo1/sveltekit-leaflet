<script lang="ts">
	import L, { type LatLngExpression } from 'leaflet';
	import { getContext, onMount, onDestroy } from 'svelte';
	import { myDataStore } from '../api/BuildingData';
	import { get } from 'svelte/store';

	type StoreDetails = {
		latLngs: Array<LatLngExpression>;
		name: string;
		color: string;
	};

	type BuildingLatLng = {
		latLng: LatLngExpression[];
	};

	type BaseMaps = Record<string, L.TileLayer>;

	let data: Array<any> = get(myDataStore);
	let layerGroup: L.LayerGroup | undefined;
	let controlLayer: L.Control.Layers | undefined;
	let map: L.Map | undefined;

	function processStoresData(data: Array<any>) {
		const storesDetails: Array<StoreDetails> = [];
		data.forEach((feature: any) => {
			const parsedLatLngs = JSON.parse(feature.geom.String);
			const name = feature.name.String;
			const color = feature.number_of_floors.Int64 % 2 === 0 ? 'green' : 'red';
			storesDetails.push({ latLngs: parsedLatLngs, name: name, color: color });
		});
		return storesDetails;
	}

	function convertLatLngFormat(storesData: Array<StoreDetails>) {
		const buildingLatLngs: Array<BuildingLatLng> = [];
		storesData.forEach((feature: any) => {
			const latitudeLongs: L.LatLngExpression[] = feature.latLngs.coordinates[0].map((ring: any) =>
				ring.map((coord: any) => [coord[1], coord[0]])
			);
			buildingLatLngs.push({ latLng: latitudeLongs });
		});
		return buildingLatLngs;
	}

	function initializeLayers(
		map: L.Map,
		propertyLatLng: Array<BuildingLatLng>,
		featureProps: Array<StoreDetails>,
		baseMaps: BaseMaps
	) {
		if (layerGroup) {
			layerGroup.clearLayers();
		} else {
			layerGroup = L.layerGroup().addTo(map);
		}

		propertyLatLng.forEach(({ latLng }, i) => {
			const polygon = L.polygon(latLng, {
				color: featureProps[i].color,
				fillOpacity: 1.0
			}).addTo(layerGroup!);

			polygon.bindPopup(featureProps[i].name);
		});

		if (controlLayer) {
			map.removeControl(controlLayer);
		}

		controlLayer = L.control
			.layers(satelliteBaseMaps, {
				Buildings: layerGroup,
				'Image Overlay': baseMaps['Image Overlay']
			})
			.addTo(map);
	}

	const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
	const { getBaseMaps }: { getBaseMaps: () => Record<string, L.TileLayer> } =
		getContext('baseMaps');
	map = getMap();
	const baseMaps = getBaseMaps();
	const satelliteBaseMaps = { ...baseMaps };
	delete satelliteBaseMaps['Image Overlay'];

	onMount(() => {
		if (map) {
			const buildingProps = processStoresData(data);
			const buildingLatLngs = convertLatLngFormat(buildingProps);
			initializeLayers(map, buildingLatLngs, buildingProps, baseMaps);
		}
	});

	onDestroy(() => {
		layerGroup?.remove();
		controlLayer?.remove();
	});

	$: if (map && $myDataStore) {
		const updatedData = get(myDataStore);
		const buildingProps = processStoresData(updatedData);
		const buildingLatLngs = convertLatLngFormat(buildingProps);
		initializeLayers(map, buildingLatLngs, buildingProps, baseMaps);
	}
</script>

<div>
	{#if layerGroup}
		<slot />
	{/if}
</div>
