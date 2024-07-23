<script lang="ts">
    import { onMount, setContext } from 'svelte';
    import L from 'leaflet';
    import { writable } from 'svelte/store';
  
    // Create a writable store for isSidebarOpen
    export let isSidebarOpen = writable(false);
  
    let map;
    let layerControl;
  
    const satelliteBaseMaps = { /* Define your satellite base maps here */ };
    const layerGroup = L.layerGroup(); // Example layer group
    const baseMaps = { 'Image Overlay': L.imageOverlay('path/to/image.png', [[40.712, -74.227], [40.774, -74.125]]) }; // Example image overlay
  
    onMount(() => {
      map = L.map('map').setView([51.505, -0.09], 13);
  
      layerControl = L.control.layers(
        satelliteBaseMaps, 
        {
          Buildings: layerGroup,
          'Image Overlay': baseMaps['Image Overlay']
        },
        {
          collapsed: true 
        }
      ).addTo(map);
  
      // Set the context for layerControl
      setContext('layerControl', layerControl);
  
      // Add click event listener for the layers toggle button
      const layersToggleButton = document.querySelector('.leaflet-control-layers-toggle');
      layersToggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        isSidebarOpen.update(open => !open);
      });
    });
  </script>
  
  <!-- <style>
    .leaflet-control-layers:hover .leaflet-control-layers-list {
      display: none; /* Ensure the list does not display on hover */
    }
  </style>
  
  <div id="map" style="height: 100vh;"></div> -->
  