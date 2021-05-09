import React from 'react';
import { Link } from 'react-router-dom';
import './Listings.css';

const Listings = () => {
  return (
    <div className="Listings">
      <h1>Listings</h1>
      <ul className="p-0">
        <li className="listing"><Link to="/listings/1">Citadel of Ricks</Link></li>
        <li className="listing"><Link to="/listings/2">Earth: Dimension C-137</Link></li>
        <li className="listing"><Link to="/listings/3">Blips and Chitz</Link></li>
        <li className="listing"><Link to="/listings/4">Greasy Grandma World</Link></li>
      </ul>
    </div>
  );
}

export default Listings;