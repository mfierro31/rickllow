import React from 'react';
import SearchForm from './SearchForm';
import './Home.css';
import banner from './home_banner.jpeg';
import earth from './earth.png';
import citadel from './citadel_of_ricks.png';
import cromulons from './Cromulon_Dimension.png';
import greasyGrandmaWorld from './greasy_grandma_world.jpeg';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-banner-container">
        <img src={banner} className="img-fluid Home-banner" alt="rick and morty in another dimension"/>
        <h1>Tired of your place in the universe?</h1>
        <SearchForm classOrNoClass="Home-search-form" />
        <h4>We can help you change that.</h4>
      </div>
      <h2 className="mt-3">Search by category</h2>   
      <div>
        <h4>Planets</h4>
        <img src={earth} className="img-fluid" alt="earth" />
      </div>
      <div>
        <h4>Space Stations</h4>
        <img src={citadel} className="img-fluid" alt="citadel of ricks" />
      </div>
      <div>
        <h4>Dimensions</h4>
        <img src={cromulons} className="img-fluid" alt="cromulon dimension" />
      </div>
      <div>
        <h4>Everything else</h4>
        <img src={greasyGrandmaWorld} className="img-fluid" alt="greasy grandma world" />
      </div>
    </div>
  );
}

export default Home;