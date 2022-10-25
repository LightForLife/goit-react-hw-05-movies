import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchSearchMovies } from 'components/API';
import { FilmList } from 'components/FilmList/FilmList';

export default function Movies() {
  const [films, setFilms] = useState([]);
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
      console.log(error);
    }
  }, [nameFilms]);

  useEffect(() => {
    nameFilms && searchFilms();
  }, [nameFilms, searchFilms]);

  return (
    <main>
      <Searchbar onSubmit={createSearchMovies} />
      <FilmList films={films} />
    </main>
  );
}
