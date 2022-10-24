import { useState, useEffect } from 'react';
import { fetchTrendMovie } from 'components/API';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await fetchTrendMovie();
        console.log(movies);
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
      {films.map(film => (
        <li key={film.id}>{film.original_title}</li>
      ))}
    </main>
  );
}
