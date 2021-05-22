import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ id, name, cost, image }) => {
  return (
    <div className="card rounded shadow">
      <Link to={`/listings/${id}`}>
        <img src={`/images/${image}`} className="card-img-top img-fluid" alt={name} />
      </Link>
      <div className="card-body rounded-bottom">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{cost}</p>
      </div>
    </div>
  );
}

export default ListingCard;