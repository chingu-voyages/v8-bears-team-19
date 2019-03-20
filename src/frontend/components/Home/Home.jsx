import React from 'react';
import Feed from '../Feed/Feed';

const Home = props => {

  return (
    <div className="home">
      <div className="home__container">
        <Feed />      
      </div>
    </div>
  );
};

export default Home;