import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchSearchMovies } from 'Api';
import { FilmList } from 'components/FilmList/FilmList';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const nameFilms = searchParams.get('query') ?? '';

  const createSearchMovies = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  const searchFilms = useCallback(async () => {
    try {
      const movies = await fetchSearchMovies(nameFilms);
      setFilms(movies);
    } catch (error) {
      setError('Failed to load films :(');
    } finally {
      setIsLoading(false);
    }
  }, [nameFilms]);

  useEffect(() => {
    nameFilms && searchFilms();
  }, [nameFilms, searchFilms]);

  return (
    <main>
      <Searchbar onSubmit={createSearchMovies} />
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

export default Movies;
