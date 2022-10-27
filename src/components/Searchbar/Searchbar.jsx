import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit, value }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input type="text" defaultValue={value} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
