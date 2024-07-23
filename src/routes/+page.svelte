<script lang="ts">
	import '../app.css';
	import L, { type LatLngExpression } from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import Leaflet from '$lib/Leaflet.svelte';
	import LayerGroup from '$lib/LayerGroup.svelte';
	import Legend from '$lib/Legend.svelte';
	import SearchButton from '../layout/SearchButton.svelte';
	import LayerSidebar from '../layout/LayerSidebar.svelte';
	// import Test from '../layout/test.svelte';
	import '../styles/styles.css';


	let hybridImage = 'http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}';
	let osm = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
	let noBackground = '';
	let Tile = 'http://localhost:8000/{z}/{x}/{y}.png'

	const initialView: LatLngExpression = [6.666962467939364, -1.5671130831231543];
	
</script>

<div class="w-full-h-screen">
	<Leaflet
		view={initialView}
		zoom={20}
		defaultLayerUrl={osm}
		optionalLayerUrl={hybridImage}
		noLayerUrl={noBackground}
		overlayLayerUrl={Tile}
	>
	<SearchButton />
	<Legend position="bottomleft" />
	<LayerGroup/>
	<!-- <Test /> -->
	<!-- <LayerSidebar /> -->
	</Leaflet>
</div>

<!-- <style>
	.w-full-h-screen {
		height: 100%;
	}
</style> -->