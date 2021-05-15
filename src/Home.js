import React from 'react';
import SearchForm from './SearchForm';
import './Home.css';
import banner from './home_banner.jpeg';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-banner-container">
        <img src={banner} className="img-fluid Home-banner" alt="rick and morty in another dimension"/>
        <h1>Tired of your place in the universe?</h1>
        <SearchForm classOrNoClass="Home-search-form" />
        <h4>We can help you change that.</h4>
      </div>
    </div>
  );
}

export default Home;