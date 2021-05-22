import React from 'react';
import { Link } from 'react-router-dom';
import './ListingCard.css';

const ListingCard = ({ id, name, cost, image }) => {
  return (
    <div className="ListingCard card rounded shadow">
      <Link to={`/listings/${id}`}>
        <div className="ListingCard-img-container">
          <img src={`/images/${image}`} className="card-img-top img-fluid" alt={name} />
          <i className="far fa-heart ListingCard-heart"></i>
        </div>
      </Link>
      <div className="card-body rounded-bottom">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{cost}</p>
      </div>
    </div>
  );
}

export default ListingCard;