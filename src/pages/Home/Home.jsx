import { useState, useEffect } from 'react';
import { fetchTrendMovie } from 'components/API';
import { FilmList } from 'components/FilmList/FilmList';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await fetchTrendMovie();
        setFilms(movies);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
    return;
  }, []);

  return (
    <main>
      <h2>Tranding today</h2>
      <FilmList films={films} />
    </main>
  );
}
