import { useState, useEffect, useCallback, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMoviesDetails, fetchMoviesGenres } from '../API';
import { BackLink } from 'components/BackLink/BackLink';
import { FilmCard, FilmTitle, FilmInfo } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const locationFrom = location?.state?.from ?? '/';

  const getFilmsDetails = useCallback(async () => {
    if (!movieId) {
      return;
    }
    try {
      const movies = await fetchMoviesDetails(movieId);
      const moviesGenres = await fetchMoviesGenres(movieId);

      setFilm(movies);
      setGenres(moviesGenres);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    getFilmsDetails();
  }, [getFilmsDetails]);

  const releaseDate = new Date(film.release_date);
  const { release_date, title, name, popularity, overview, poster_path } = film;

  return (
    <main>
      <BackLink to={locationFrom}>◀ Back</BackLink>
      {/* {loading && <Loader />} */}
      {error && <h2>Oops...there is nothing, try again</h2>}
      {!error ? (
        <FilmCard>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title}
            />
          </div>
          <FilmInfo>
            <FilmTitle>
              {film.title ? title : name} (
              {releaseDate.getFullYear(release_date)})
            </FilmTitle>
            <h3>Overview</h3>
            {overview ? <p>{overview}</p> : <p>No overview</p>}
            <h3>User score</h3>
            <p>{popularity}</p>
            <h3>Genres</h3>
            {genres.map(genre => (
              <div key={genre}> {<li>{genre}</li>}</div>
            ))}
          </FilmInfo>
        </FilmCard>
      ) : (
        <h2>Oops...there is nothing, try again</h2>
      )}

      {!error && (
        <div>
          <div>
            <Link to="cast" state={{ from: location.state?.from ?? '/movies' }}>
              Cast
            </Link>
          </div>
          <div>
            <Link
              to="reviews"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Reviews
            </Link>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
