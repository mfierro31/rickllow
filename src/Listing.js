import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import locations from './myLocations';
import ViewLocationForm from './ViewLocationForm';
import './Listing.css';
import SaveHeart from './SaveHeart';
import { numberWithCommas } from './helpers';

const Listing = () => {
  const { id } = useParams();

  const listing = locations.find(l => l.id === parseInt(id));

  if (!listing) {
    return <Redirect to="/listings" />;
  }

  // Make the column sizes conditional on how many images a listing has
  const imgLength = listing.images.length;

  let imgClassName;

  if (imgLength === 1) {
    imgClassName = "col-12 col-xl-6";
  } else if (imgLength === 2 || imgLength === 4) {
    imgClassName = "col-12 col-md-6";
  } else {
    imgClassName = "col-12 col-md-4";
  }
  // } else {
  //   imgClassName = "col-12 col-md-6 col-lg-3";
  // }

  return (
    <div className="Listing container">
      <h1 className="my-4">{listing.name}</h1>
      {/* Try to understand this better - the positioning and alignment of it all.  Can we make it so that it behaves
      like the heart buttons on the ListingCard components?  i.e. - it doesn't move when you click on it */}
      <div className="row justify-content-center mb-4">
        <div>
          <SaveHeart saveText color="primary" />
        </div>
      </div>
      <div className="row justify-content-center">
        {listing.images.map((img, i) => (
          <div key={i} className={imgClassName + " mb-4 Listing-img-col"}>
            <img src={`/images/${img}`} className="img-fluid Listing-image rounded shadow" alt={img} />
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <p><b>Type:</b> {listing.type}</p>
        </div>
        <div className="col-12 col-md-6">
          <p><b>Dimension:</b> {listing.dimension}</p>
        </div>
        <div className="col-12 col-md-6">
          {/* Below, we check to see if the cost of living is in another currency.  If it is, we show that currency first,
          followed by the USD equivalent in parentheses.  If not, we just show the USD amount. */}
          <p><b>Cost Of Living:</b> 
            {listing.alt_cost_curr ? 
              ` ${numberWithCommas(listing.alt_cost_amt)} ${listing.alt_cost_curr} ($${numberWithCommas(listing.cost)})/year` : 
              ` $${numberWithCommas(listing.cost)}/year`
            }
          </p>
        </div>
        <div className="col-12 col-md-6">
          <p><b>Neighborhood Rating:</b> {listing.neighborhood}</p>
        </div>
        <div className="col-12">
          <p>{listing.description}</p>
        </div>
        <h3 className="mb-3">Agent:</h3>
        <div className="col-12 col-md-6 mb-4">
          <h5>{listing.agent.name}</h5>
          <img src={`/images/${listing.agent.image}`} className="img-fluid rounded shadow" alt={listing.agent.name} />
        </div>
        <div className="col-12 col-md-6 mb-5">
          <h5 className="mb-3">View this location with {listing.agent.name}!</h5>
          <ViewLocationForm />
        </div>
        <h3 className="mb-3">Reviews:</h3>
        {/* For some reason, on extra small screen sizes, the bullet points disappear */}
        <ul className="text-sm-start mb-5">
          {/* The &#8212; below is HTML for a long dash */}
          {listing.reviews.map(r => (
            <li key={r.id} className="mb-3">{r.text} &#8212; <small className="text-primary">{r.user.username}</small></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Listing;