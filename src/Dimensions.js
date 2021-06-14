// Dimensions can't be displayed the same way as Planets, Space Stations, and Everything Else, so instead of using the 
// Listings component for dimensions, I have to create a new component instead.
import React, { useEffect, useState } from 'react';
import RickllowApi from './api';
import ListingCard from './ListingCard';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDimensions() {
      const res = await RickllowApi.getLocationsByCategory('dimensions');
      const dimensionsSet = new Set();
      res.forEach(l => dimensionsSet.add(l.dimension));

      const dimensionsArr = Array.from(dimensionsSet).map((d, i) => {
        const listings = res.filter(l => l.dimension === d);
        return {
          id: i,
          name: d,
          listings
        };
      });

      setDimensions(dimensionsArr);
      setIsLoading(false);
    }
    getDimensions();
  }, []);

  if (isLoading) {
    return <h1 className="my-4">Loading...</h1>;
  }

  return (
    <div className="container">
      <h1 className="my-4">Dimensions({dimensions.length})</h1>
      <div className="row justify-content-center">
        {dimensions.map(d => (
          <div key={d.id} className="col-12">
            <h3 className="my-4">{d.name}({d.listings.length} location{`${d.listings.length > 1 ? 's' : ''}`})</h3>
            <div className="row justify-content-center">
              {d.listings.map(l => (
                <div key={l.name} className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
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
        ))}
      </div>
    </div>
  );
}

export default Dimensions;