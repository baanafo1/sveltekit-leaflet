<script>
	export let position = 'bottomleft';
  </script>
  
  <style>
.legend {
	position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    padding: 10px 14px;
    background-color: rgba(245,245,220,0.8) ;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    border-radius: 5px;
    max-width: 250px;
    border: 1px solid grey;
    padding: 10px;
    line-height: 1.5;
    border: 1px solid #ccc;
    border-radius: 5px;
    z-index: 1000;
}

/* this line syles the paragraph element in the legend */
.legend p {
  font-size: 16px;
  line-height: 24px;
}

/* this line styles the img element in the legend */
.legend img {
  max-width: 200px;
  margin: auto;
  display: block;
}

.legend ul {
    list-style-type: none;
    padding: 0;
  }

  .legend li {
    margin: 5px 0;
  }

  .bottomleft {
    bottom: 10px;
    left: 10px;
  }

  .bottomright {
    bottom: 10px;
    right: 10px;
  }

  .topleft {
    top: 10px;
    left: 10px;
  }

  .topright {
    top: 10px;
    right: 10px;
  }

  </style>
  
  <div class="legend {position}">
	<p><b>Color Scheme Legend</b></p>
	<hr>
	<p>This map uses the following color scheme:</p>
	<ul>
	  <li style="color: red;">Red - Indicates Defaulters</li>
	  <li style="color: blue;">Blue - Indicates Compliant</li>
	</ul>
	Created with the Leaflet library
	<img src='$lib/leaflet.png' alt="Leaflet Logo">
  </div>
  