<script>
</script>

<body>
	<section id="about">
		<h2>About This Project</h2>
		<div class="brief_overview">
			<h3>Overview</h3>
			<p>
				This project is the culmination of our undergraduate studies, undertaken with the guidance
				of our esteemed supervisor, Dr. Titus Tienaah, Department of Geomatic Engineering, KNUST. We
				are thrilled to present <strong
					><em
						>Design and Implementation of a Web-Based GIS Revenue Mobilization System with a Mobile
						Money Payment Integration</em
					></strong
				> , a project that delves into Revenue Mobilization.
			</p>
		</div>
		<div class="motivation">
			<h3>Motivation</h3>
			<p>
				Our inspiration stemmed from the critical need for efficient revenue mobilization within
				residential areas, organization or even the local governments. We recognized the challenges
				of traditional payment tracking methods, often plagued by delays and lack of transparency.
				This project tackles these issues by introducing a color-coded, real-time web-based property
				payment tracking system. Our team is driven by the desire to create a tool that not only
				enhances the efficiency of revenue management but also encourages responsible and
				sustainable practices. By providing a seamless and user-friendly platform for businesses and
				governments to mobilize revenue, we aim to reduce waste, boost revenue generation, and more
				importantly identify defaulters.
			</p>
		</div>
		<div class="remarks">
			<h3>Remarks</h3>
			<p>
				We are confident that this project offers a significant contribution to the field of local
				government finance by promoting timely property tax collection and fostering a more
				transparent and accountable system. We express our sincere gratitude to especially Dr. Titus
				Tienah for his unwavering guidance and support and the entire department of Geomatic
				Engineering throughout this journey.
			</p>
		</div>
		<div>
			<h2>Team</h2>
			<div class="team">
				<div class="member">
					<h3>Dr. Titus Tienaah</h3>
					<img src="doc.jpeg" alt="Dr. Titus" />
					<p>Project Supervisor</p>
				</div>
				<div class="member">
					<h3>Bismark A. Anafo</h3>
					<img src="bis.png" alt="Bismark" />
					<p>Project Student</p>
					<h4>Contact</h4>
					<p>Email: <a href="mailto:bismarckanafo@gmail.com">bismarckanafo@gmail.com</a></p>
				</div>
				<div class="member">
					<h3>Philip Darkwah</h3>
					<img src="philip.jpg" alt="Philp" />
					<p>Project Student</p>
					<h4>Contact</h4>
					<p>Email: <a href="mailto:bismarckanafo@gmail.com">bismarckanafo@gmail.com</a></p>
				</div>
			</div>
		</div>
	</section></body
>

<style>
	body {
		font-family: Arial, sans-serif;
		line-height: 1.6;
		margin: 0;
		padding: 0;
		background-color: #f4f4f4;
		color: #333;
	}
	h2 {
		font-size: 20px; /* Set a larger font size for headings */
		font-weight: bold; /* Make headings bold */
		margin-bottom: 1rem; /* Add some space below headings */
		color: #333; /* Set a darker text color */
	}

	h3 {
		font-size: 1.5rem; /* Set a slightly smaller font size */
		font-weight: bold; /* Make headings bold */
		margin-bottom: 0.75rem; /* Add less space below subheadings */
		color: #353f50; /* Set a slightly lighter text color */
	}

	h4 {
		font-size: 1.25rem; /* Set an even smaller font size */
		font-weight: normal; /* Make headings not bold */
		margin-bottom: 0.5rem; /* Add minimal space below smaller headings */
		color: #999; /* Set an even lighter text color */
	}


	.brief_overview,
	.motivation,
	.remarks {
		/* Styles for content sections */
		padding: 1rem;
		border: 1px solid #ddd; /* Add a thin border */
		border-radius: 5px; /* Round corners for a nicer look (optional) */
		text-align: justify; /* Justify the text content within these sections */
		margin-bottom: 2rem; /* Add some margin for spacing */
	}
	.team {
		display: flex; /* Arrange team members horizontally */
		flex-wrap: wrap; /* Allow members to wrap to next line if needed */
		justify-content: space-around; /* Distribute members evenly */
		margin: 2rem 0; /* Add some margin for spacing */
	}

	.team .member {
		text-align: center; /* Center content within each member div */
		padding: 1rem; /* Add some padding for spacing */
		border: 1px solid #ddd; /* Add a thin border */
		border-style: round;
		border-radius: 5px; /* Round corners for a nicer look (optional) */
		margin: 0.5rem; /* Add some margin between members */
		width: calc(25% - 1rem); /* Calculate width based on number of members (adjust if needed) */
	}

	.team .member img {
		display: block;
		margin: 0 auto;
		width: 100%;
		max-width: 150px; /* Set a maximum width for images */
		max-height: 150px; /* Set a maximum height for images */
		border-radius: 50%;
		object-fit: cover; /* Ensure images fit the circle without distortion */
	}

	.team .member h3 {
		font-size: 1rem; /* Set a slightly smaller font size */
		font-weight: bold; /* Make headings bold */
		margin-bottom: 0.5rem; /* Add some space below headings */
	}
	.team .member h4 {
		font-size: 0.8rem; /* Set a slightly smaller font size */
		font-weight: normal; /* Make headings not bold */
		margin-bottom: 0; /* Add minimal space below smaller headings */
	}
	section#about {
		padding: 20px;
		background: #e4e4e4;
	}
	.team .member a:hover {
		text-decoration: underline;
	}
</style>
