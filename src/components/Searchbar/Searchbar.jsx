import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query === '') {
      alert(`Please enter text to search`);
      return;
    }

    onSubmit(query);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Search movies"
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
