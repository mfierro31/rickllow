import React from 'react';
import { Link } from 'react-router-dom';
import './Listings.css';
import locations from './locations';

const Listings = () => {
  return (
    <div className="Listings container">
      <h1 className="my-4">All Listings</h1>
      <div className="row justify-content-center">
        {locations.map(l => (
          <div key={l.id} className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card rounded shadow">
              <Link to={`/listings/${l.id}`}>
                <img src={`/images/${l.images[0]}`} className="card-img-top img-fluid" alt={l.name} />
              </Link>
              <div className="card-body rounded-bottom">
                <h5 className="card-title">{l.name}</h5>
                <p className="card-text">{l.cost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;