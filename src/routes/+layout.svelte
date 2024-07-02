<script>
	let currentYear = new Date().getFullYear();
</script>

<div class="main">
	<header>
		<div class="container">
			<div id="branding">
				<h1>Revenue Mobilization Tracker</h1>
			</div>
			<nav>
				<ul>
					<li><a href="#about">About Us</a></li>
					<li><a href="#mission">Our Mission</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<div class="content">
		<slot />
	</div>

	<footer>
		<p>&copy; {currentYear} Geomatic Engineering- KNUST</p>
	</footer>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%; 
		max-width: 100%;
		margin: auto;
		overflow: hidden;
	}

	header {
		background: #35424a;
		color: #ffffff;
		padding: 16.5px 0;
		border-bottom: #e8491d 3px solid;
		width: 100%; 
	}

	header a {
		color: #ffffff;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 16px;
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
		margin-right: auto; 
	}

	header #branding h1 {
		margin: 0;
		padding-left: 15px;
	}

	nav {
		margin-left: auto; 
		padding-right: 20px;
    }

	.main {
		min-height: 80vh; 
		display: flex;
		flex-direction: column;
	}

	.content {
		flex: 1; 
		overflow-y: auto; 
	}

	footer {
		background: #35424a;
		color: #ffffff;
		text-align: center;
		padding: 16.5px 0;
		width: 100%; 
	}
</style>
