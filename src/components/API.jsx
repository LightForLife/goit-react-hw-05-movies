import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'dc4ab5f19e3eea083dd36e20fcfaec1f';

async function getMovies(url = '', params = {}) {
  const response = await axios.get(url, params);
  return response.data.results;
}

export function fetchTrendMovie() {
  return getMovies(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

fetchTrendMovie();
