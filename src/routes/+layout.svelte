<script>
	import 'leaflet/dist/leaflet.css';
	let currentYear = new Date().getFullYear();
</script>

<div class="main">
	<div id="header">
		<header>
			<div class="container">
				<div id="branding">
					<h1>Revenue Mobilization Tracker</h1>
				</div>
				<nav>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="#mission">Mission</a></li>
					</ul>
				</nav>
			</div>
		</header>
	</div>

	<div class="map-content">
		<slot />
	</div>

	<div id="footer">
		<footer>
			<p>&copy; {currentYear} Geomatic Engineering- KNUST</p>
		</footer>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
		margin: 0;
	}

	header {
		background: #35424a;
		color: #ffffff;
		padding: 10px 0;
		border-bottom: #e8491d 3px solid;
		width: 100%;
	}

	header a {
		color: #ffffff;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 14px;
	}

	header ul {
		padding: 0;
		list-style: none;
		display: flex;
		justify-content: flex-end;
		margin: 0;
	}

	header li {
		margin-left: 11px;
	}

	header #branding {
		margin-right: 0;
	}

	header #branding h1 {
		font-family: sans-serif; /* Change font family if desired */
		font-size: 18px; /* Adjust font size */
		padding-left: 10px;
		margin: 0; /* Remove default margins */
		text-align: center; /* Center the text horizontally */
	}

	nav {
		padding-right: 20px;
	}

	.main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: 0;
	}

	.map-content {
		position: relative;
		flex: 1;
		width: 100%;
		height: 100%;
	}

	footer {
		background: #35424a;
		color: #ffffff;
		text-align: center;
		padding: 8px 0;
		width: 100%;
		border-top: #e8491d 3px solid;
		position: relative;
		box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
		transition:
			background 0.3s,
			box-shadow 0.3s;
	}

	footer:hover {
		background: #2c3e50;
		box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.7);
	}
</style>
