import React from 'react';
import { useParams } from 'react-router-dom';

const Listing = () => {
  const { id } = useParams();

  return (
    <h1>Listing {id}</h1>
  );
}

export default Listing;