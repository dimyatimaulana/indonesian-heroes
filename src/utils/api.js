const api = (() => {
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const BASE_URL = 'https://indonesia-public-static-api.vercel.app/api/heroes';

  async function getHeroes() {
    const response = await fetch(CORS_PROXY + BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    const heroes = responseJson;

    return heroes;
  }

  return { getHeroes };
})();

export default api;
