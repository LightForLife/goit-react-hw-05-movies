import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <div>
      {films.map(({ id, name, title }) => (
        <div key={id}>
          {
            <div>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <h2>{title ? title : name}</h2>
              </Link>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};
