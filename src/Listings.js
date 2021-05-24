import React from 'react';
import './Listings.css';
import locations from './locations';
import ListingCard from './ListingCard';

const Listings = () => {
  return (
    <div className="Listings container">
      <h1 className="my-4">All Listings</h1>
      <div className="row justify-content-center">
        {locations.map(l => (
          <div key={l.id} className="col-12 col-md-6 col-lg-3 mb-4">
            <ListingCard 
              id={l.id} 
              name={l.name} 
              cost={{ cost: l.cost, altCost: l.alt_cost_amt, altCurr: l.alt_cost_curr }} 
              image={l.images[0]} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;