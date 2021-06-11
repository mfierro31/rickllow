import React from 'react';
import { useParams, Redirect, useLocation } from 'react-router-dom';
import './Listings.css';
import locations from './myLocations';
import ListingCard from './ListingCard';

const Listings = () => {
  console.log(locations);
  const { category } = useParams();
  // Process to get the query param values, if there are any:
  // useLocation hook gives back an object containing info about the URL.  One of the properties is search, which contains
  // the query params part of a URL.  If our query param was ?search_term=earth, it would return that string.
  const { search } = useLocation();
  // URLSearchParams is a JS class that has useful methods to modify or get info from a URL param.  The get method simply gets
  // the value of a search parameter.  If it doesn't find the parameter you're looking for, it returns null.  
  const searchTerm = new URLSearchParams(search).get('search_term');

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
      default:
        title = "Everything Else";
        listings = locations.filter(l => l.type !== "Planet" && l.type !== "Space station");
    }
  } else {
    title = "All Listings";
    listings = locations;
  }

  if (searchTerm) {
    title = `Search Results For "${searchTerm}"`;
    // To filter by the search term, we can use the string version of indexOf to help us.  Since we're not looking for an exact
    // match from our locations to our search term, we're just looking for partial matches, we can use indexOf to see if a
    // location's type, dimension, or name includes a substring (the search term).  If it does include the search term, its 
    // location will be one of the filtered results, if not, it won't.
    listings = locations.filter(l => (
      l.type.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0  || 
      l.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 || 
      l.dimension.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
    ));
  }
  
  return (
    <div className="Listings container">
      <h1 className="my-4">{title}({listings.length})</h1>
      <div className="row justify-content-center">
        {listings.map(l => (
          <div key={l.name} className="Listings-columns col-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
            {/* Below, we have to pass in cost as an object, because we need to know for every location if that location
            has an alternate currency.  If it does, we have to show that plus the normal USD cost. */}
            <ListingCard 
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