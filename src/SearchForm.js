import React from 'react';

const SearchForm = ({ classOrNoClass }) => {
  return (
    <form className={classOrNoClass ? classOrNoClass : ""}>
      <input type="text" placeholder="enter a location name" />
    </form>
  );
}

export default SearchForm;