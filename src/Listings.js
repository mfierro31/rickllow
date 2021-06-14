import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useLocation } from 'react-router-dom';
import './Listings.css';
import ListingCard from './ListingCard';
import RickllowApi from './api';

const Listings = () => {
  const { category } = useParams();
  // Process to get the query param values, if there are any:
  // useLocation hook gives back an object containing info about the URL.  One of the properties is search, which contains
  // the query params part of a URL.  If our query param was ?search_term=earth, it would return that whole thing as a string.
  const { search } = useLocation();
  // URLSearchParams is a JS class that has useful methods to modify or get info from a URL param.  The get method simply gets
  // the value of a search parameter.  If it doesn't find the parameter you're looking for, it returns null.  
  const searchTerm = new URLSearchParams(search).get('search_term');
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function getLocations() {
      let res;

      if (category) {
        res = await RickllowApi.getLocationsByCategory(category);

        if (category === 'planets') {
          setTitle("Planets");
        }

        if (category === 'space-stations') {
          setTitle("Space Stations");
        }

        if (category === 'misc') {
          setTitle("Everything Else");
        }
      } else if (searchTerm) {
        setTitle(`Search Results For "${searchTerm}"`);
        res = await RickllowApi.getAllLocations(searchTerm);       
      } else {
        setTitle("All Listings");
        res = await RickllowApi.getAllLocations();
      }

      setLocations(res);
      setIsLoading(false);
    }
    getLocations();
  }, [searchTerm, category]);
  
  if (isLoading) {
    return <h1 className="my-4">Loading...</h1>;
  }

  if (typeof locations === 'string') {
    return <Redirect to="/listings" />;
  }

  return (
    <div className="Listings container">
      <h1 className="my-4">{title}({locations.length})</h1>
      <div className="row justify-content-center">
        {locations.map(l => (
          <div key={l.name} className="Listings-columns col-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
            {/* Below, we have to pass in cost as an object, because we need to know for every location if that location
            has an alternate currency.  If it does, we have to show that plus the normal USD cost. */}
            <ListingCard 
              name={l.name} 
              cost={{ cost: l.cost, altCost: l.alt_cost_amt, altCurr: l.alt_cost_curr }} 
              image={l.image} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;