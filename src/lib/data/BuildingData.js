import { writable } from 'svelte/store';

export let myDataStore = writable([]);

const fetchBuildings = async () => {
	try {
		const response = await fetch('http://localhost:8080/buildings'); 
		if (response.ok) {
			const newData = await response.json();
			myDataStore.set(newData); 
		} else {
			console.error('Failed to fetch buildings:', response.statusText);
		}
	} catch (error) {
		console.error('Error fetching buildings:', error);
	}
};
fetchBuildings();

const interval = setInterval(fetchBuildings, 5000);
