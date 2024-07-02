<script>
	export let position = 'bottomleft';
</script>

<div class="legend {position}">
	<p><b>Legend</b></p>
	<p>Color<span class="spacer"></span>Status:</p>
	<hr class="hr-line" />

	<ul>
		<li><span class="legend-color" style="background-color: green;"></span> Compliant</li>
		<li><span class="legend-color" style="background-color: red;"></span> Defaulters</li>
	</ul>
	Created with the Leaflet library
	<img src="/leaflet.png" alt="Leaflet Logo" />
</div>

<style>
	.legend {
		padding: 6px 8px;
		background-color: rgba(255, 255, 255, 0.8);
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		position: absolute;
		font-size: 16px;
		font-family: 'Open Sans', Helvetica, sans-serif;
		max-width: 250px;
		border: 1px solid grey;
		line-height: 1.5;
		z-index: 1000;
	}

	.legend p {
		font-size: 16px;
		line-height: 24px;
	}

	.legend img {
		max-width: 200px;
		margin: auto;
		display: block;
	}
	.leaflet-popup-content-wrapper {
		text-align: center;
		background-color: rgb(255, 255, 255) !important;
	}
	.legend ul {
		list-style-type: none;
		padding: 0;
	}

	.legend li {
		margin: 5px 0;
	}

	.legend-color {
		display: inline-block;
		width: 35px;
		height: 20px;
		margin-right: 45px;
		vertical-align: middle;
		border: 1px solid #ccc;
	}

	.hr-line {
		border: none;
		height: 1px;
		background-color: #ccc;
		margin: 6px 0;
	}
	.spacer {
		display: inline-block;
		width: 45px;
	}

	.bottomleft {
		bottom: 10px;
		left: 10px;
	}
</style>
