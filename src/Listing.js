import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import locations from './locations';
import ViewLocationForm from './ViewLocationForm';
import './Listing.css';

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
    imgClassName = "col-12";
  } else if (imgLength === 2) {
    imgClassName = "col-12 col-md-6";
  } else if (imgLength === 3) {
    imgClassName = "col-12 col-md-4";
  } else {
    imgClassName = "col-12 col-md-6 col-lg-3";
  }

  return (
    <div className="Listing container">
      <h1 className="my-4">{listing.name}</h1>
      <div className="row justify-content-center">
        {listing.images.map((img, i) => (
          <div key={i} className={imgClassName + " mb-4"}>
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
          <p><b>Cost Of Living:</b> {listing.cost}</p>
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
      </div>
    </div>
  );
}

export default Listing;