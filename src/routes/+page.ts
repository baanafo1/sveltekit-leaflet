export const ssr = false;

export const load = async (loadserverEvent) => {

    const { fetch } = loadserverEvent

    const response = await fetch('http://localhost:4000/features')
    const buildings = await response.json()

    return {
        buildings
    }

}