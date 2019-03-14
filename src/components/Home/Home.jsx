import React from 'react';
import Navbar from '../Navbar/Navbar';
import Feed from '../Feed/Feed';

const Home = props => {

  return (
    <div className="home">
      <Navbar />
      <Feed />
    </div>
  );
};

export default Home