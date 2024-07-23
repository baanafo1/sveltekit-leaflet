<script lang="ts">
	import { onMount, setContext } from 'svelte';
</script>

<div id="header">
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
</div>

<slot />

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: justify;
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
		margin: 0;
		padding-left: 15px;
	}

	nav {
		/* margin-left: 0; */
		padding-right: 20px;
	}
</style>
