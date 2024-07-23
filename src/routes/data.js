import { getContext } from 'svelte';

export function _getMapHeightFromContext() {
    const context = getContext('mapHeight'); // No type definition
    if (context && typeof context.getMapHeight === 'function') {
        console.log(context.getMapHeight())
      return context.getMapHeight();
    }
  
    // Handle default case or error scenario with a more informative message
    throw new Error('mapHeight context not found');
  }
  