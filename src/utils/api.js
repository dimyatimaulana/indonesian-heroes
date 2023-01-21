const api = (() => {
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const BASE_URL = 'https://indonesia-public-static-api.vercel.app/api/heroes';
  const BASE_URL2 = 'https://19104008-mhs.bdv.or.id/api/heroes.php';

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

  async function getHeroes2() {
    const response = await fetch(BASE_URL2);
    const responseJson = await response.json();
    const heroes2 = responseJson;

    return heroes2;
  }

  return { getHeroes, getHeroes2 };
})();

export default api;
