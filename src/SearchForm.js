import React from 'react';
import './SearchForm.css';

const SearchForm = ({ classOrNoClass }) => {
  return (
    <form className={classOrNoClass ? classOrNoClass : ""}>
      <div className="input-container">
        <input type="text" className="form-control" placeholder="Enter a location name" />
        <button><i className="fas fa-search text-primary"></i></button>
      </div>
    </form>
  );
}

export default SearchForm;