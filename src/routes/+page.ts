export const ssr = false;


// export const load = async (loadserverEvent) => {
//     // console.log("Fetching data from API...");

//     const { fetch } = loadserverEvent;

//     // const response = await fetch('http://localhost:4000/features');
//     // const buildings = await response.json();
    
//     const response1 = await fetch('http://localhost:8080/buildings');
//     const database = await response1.json();

//     return {
//         prop: {
//             // buildings,
//             database
//         }
//     };
// };

// // Function to load data and set interval
// const loadData = async () => {
//     try {
//         const data = await load({ fetch });
//         // console.log("Loaded data:", data);

//     } catch (error) {
//         console.error('Error loading data:', error);
//     }
// };

// loadData();

// const interval = setInterval(loadData, 5000);

// Clean up interval on component unmount
// onDestroy(() => {
//     clearInterval(interval);
// });
