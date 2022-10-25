import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ films }) => {
  return (
    <div>
      {films.map(({ id, name, title, poster_path }) => (
        <div key={id}>
          {
            <div>
              <Link to={`/movies/${id}`}>
                {/* <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                /> */}
                <h2>{title ? title : name}</h2>
              </Link>
            </div>
          }
        </div>
      ))}
    </div>
  );
};
