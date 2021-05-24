import React from 'react';
import { Link } from 'react-router-dom';
import './ListingCard.css';
import SaveHeart from './SaveHeart';
import { numberWithCommas } from './helpers';

const ListingCard = ({ id, name, cost, image }) => {
  return (
    <div className="ListingCard card rounded shadow">
      <div className="ListingCard-img-container">
        <Link to={`/listings/${id}`}>
          <img src={`/images/${image}`} className="card-img-top img-fluid" alt={name} />
        </Link>
        <SaveHeart color="white" />
      </div>
      <div className="card-body rounded-bottom">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {cost.altCurr ? 
            `${numberWithCommas(cost.altCost)} ${cost.altCurr}/year ($${numberWithCommas(cost.cost)}/year)` : 
            `$${numberWithCommas(cost.cost)}/year`
          }
        </p>
      </div>
    </div>
  );
}

export default ListingCard;