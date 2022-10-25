import { useState, useEffect, useCallback } from 'react';
import { fetchTrendMovie } from 'Api';
import { FilmList } from 'components/FilmList/FilmList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const fetchFilms = useCallback(async () => {
    try {
      setIsLoading(true);
      const films = await fetchTrendMovie();
      setFilms(films);
    } catch {
      setError('Failed to load films :(');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  useEffect(() => {
    location.pathname = '/';
  }, [location]);

  return (
    <main>
      <h2>Tranding today</h2>
      {!isLoading ? (
        !error ? (
          <FilmList films={films} />
        ) : (
          <div>{error}</div>
        )
      ) : (
        <div>Loading ...</div>
      )}
    </main>
  );
};

export default Home;
