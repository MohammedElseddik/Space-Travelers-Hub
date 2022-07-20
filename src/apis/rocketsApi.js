export const ROCKETS_API_URL = 'https://api.spacexdata.com/v3/rockets';

export const getAllRockets = () => fetch(ROCKETS_API_URL)
  .then((response) => response.json())
  .then((data) => ({ data }));
