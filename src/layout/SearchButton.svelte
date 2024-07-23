<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	let searchQuery = '';
	let button: HTMLButtonElement;

	function handleSearch() {
		dispatch('search', { query: searchQuery });
	}

	onDestroy(() => {
		button?.remove();
	});
</script>

<div class="search-container">
	<input
		name="this is the first search bar"
		id="search bar placeholder"
		type="text"
		class="search-input"
		bind:value={searchQuery}
		placeholder="Search for a property..."
		on:keydown={(e) => e.key === 'Enter' && handleSearch()}
	/>
	<button class="search-button" id="2" on:click={handleSearch}>
		<img src="/search.png" alt="Search img" class="search-icon" />
	</button>
</div>

<style>
	.search-container {
		display: flex;
		flex-wrap: nowrap !important;
		align-items: center;
		position: absolute;
		top: 10px;
		/* right: 0;  */
		margin-left: 10px;
		width: 200px;
		z-index: 1000;
		background-color: var(--bs-body-bg);
		border-radius: var(--bs-border-radius);
		border: var(--bs-border-width) solid var(--bs-border-color);
	}

	.search-input {
		flex: 1;
		height: 42px;
		border: 1px solid #ccc;
		border-radius: 4px 0 0 4px;
		box-sizing: border-box;
		outline: none;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		width: 100%;
		--bs-gutter-x: 0.5rem;
	}

	.search-button {
		width: 42px;
		height: 42px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 0 4px 4px 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search-icon {
		width: 24px;
		height: 24px;
	}

	.search-button:hover {
		background-color: #0056b3;
	}
</style>
