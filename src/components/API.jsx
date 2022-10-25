import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'dc4ab5f19e3eea083dd36e20fcfaec1f';

async function getMovies(url = '', params = {}) {
  const response = await axios.get(url, params);
  return response.data.results;
}

export function fetchTrendMovie() {
  return getMovies(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function fetchSearchMovies(query) {
  return getMovies(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US&include_adult=false`
  );
}

export async function fetchMoviesDetails(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  const result = response.data;
  return result;
}

export async function fetchMoviesCast(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  const result = response.data.cast;
  return result;
}

export function fetchMoviesReviews(movieId) {
  return getMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&`
  );
}

export async function fetchMoviesGenres(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  const filmGenres = response.data.genres.map(genre => genre.name);
  return filmGenres;
}
