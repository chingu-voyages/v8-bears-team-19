import React from 'react';
import Navbar from '../Navbar/Navbar';
import Feed from '../Feed/Feed';

const Home = props => {

  return (
    <div className="home">
      <div className="home__container">
        <Navbar />
        <Feed />      
      </div>
    </div>
  );
};

export default Home