import React from 'react';
// import Search from '../Search/Search';
// import Login from '../Login/Login';

import { 
  BrowserRouter as Router, Link
} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="logo">
          <h1>Forkit</h1>
        </div>
        <div className="navbar__btns">
          <p>Search</p>
          {/* <Search /> */}
          {/* Will link to Login page */}
          <Link to={'#'}>Login</Link>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
