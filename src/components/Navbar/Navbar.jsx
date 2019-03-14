import React from 'react';
// import Search from '../Search/Search';
// import Login from '../Login/Login';

import { 
  BrowserRouter as Router, Link
} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Forkit</h1>
      </div>
      <p>Search</p>
      {/* <Search /> */}
      {/* Will link to Login page */}
      <Link to={'#'}>Login</Link>
    </div>
  )
};

export default Navbar;
