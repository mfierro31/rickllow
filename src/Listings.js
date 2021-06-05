import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './Listings.css';
import locations from './myLocations';
import ListingCard from './ListingCard';

const Listings = () => {
  const { category } = useParams();
  let title;
  let listings;

  if (category) {
    const validCategories = ["planets", "space-stations", "misc"];
    
    if (!validCategories.includes(category)) {
      return <Redirect to="/" />;
    }

    switch (category) {
      case "planets":
        title = "Planets";
        listings = locations.filter(l => l.type === "Planet");
        break;
      case "space-stations":
        title = "Space Stations";
        listings = locations.filter(l => l.type === "Space station")
        break;
      case "misc":
        title = "Everything Else";
        listings = locations.filter(l => l.type !== "Planet" && l.type !== "Space station");
    }
  } else {
    title = "All Listings";
    listings = locations;
  }
  
  return (
    <div className="Listings container">
      <h1 className="my-4">{title}({listings.length})</h1>
      <div className="row justify-content-center">
        {listings.map(l => (
          <div key={l.id} className="Listings-columns col-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
            {/* Below, we have to pass in cost as an object, because we need to know for every location if that location
            has an alternate currency.  If it does, we have to show that plus the normal USD cost. */}
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