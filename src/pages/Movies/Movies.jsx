import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchSearchMovies } from 'components/API';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const nameFilms = searchParams.get('query') ?? '';
  console.log(nameFilms);

  const createSearchMovies = query => {
    setSearchParams(query !== '' ? { query } : {});
    console.log(query);
  };

  const searchFilms = useCallback(async () => {
    try {
      const movies = await fetchSearchMovies(nameFilms);
      console.log(movies);
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
    </main>
  );
}
