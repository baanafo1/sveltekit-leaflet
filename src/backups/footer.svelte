<script>
	let currentYear = new Date().getFullYear();
</script>

<div id="footer">
    <footer>
        <p>&copy; {currentYear} Geomatic Engineering- KNUST</p>
    </footer>
</div>

<slot />

<style>
    footer {
		background: #35424a;
		color: #ffffff;
		text-align: center;
		padding: 10px 0;
		width: 100%;
		border-top: #e8491d 3px solid;
	}
</style>