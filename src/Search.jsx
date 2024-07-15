import React from 'react';

const Search = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search countries..."
    />
  );
};

export default Search;
