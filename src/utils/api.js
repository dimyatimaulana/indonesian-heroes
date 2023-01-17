const api = (() => {
  const BASE_URL = 'https://indonesia-public-static-api.vercel.app/api/heroes';
  // const BASE_URL = 'https://63936390ab513e12c50cf96f.mockapi.io/Tukerin/products';

  async function getHeroes() {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cross-Origin-Resource-Sharing': '*',
      },
    });
    const responseJson = await response.json();
    const heroes = responseJson;

    return heroes;
  }

  return { getHeroes };
})();

export default api;
