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

  const updateQueryString = query => {
    if (query === '') {
      alert(`Please enter text to search`);
      return;
    }

    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const searchFilms = useCallback(async () => {
    try {
      const movies = await fetchSearchMovies(nameFilms);
      if (movies.length === 0) {
        alert(`Movies not found`);
        return;
      }
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
      <Searchbar value={nameFilms} onSubmit={updateQueryString} />
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
