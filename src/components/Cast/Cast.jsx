import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'components/API';
import { useState, useEffect, useCallback } from 'react';

const Casts = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFilmsCast = useCallback(async () => {
    try {
      setIsLoading(true);
      const casts = await fetchMoviesCast(movieId);
      setCasts(casts);
    } catch {
      setError('Failed to load cast :(');
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    getFilmsCast();
  }, [getFilmsCast]);

  return (
    <div>
      <h2>Cast</h2>
      {!isLoading ? (
        !error ? (
          <ul>
            {casts.map(cast => (
              <li key={cast.id}>{cast.name}</li>
            ))}
          </ul>
        ) : (
          <div>{error}</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Casts;
