import React from 'react';
// import Search from '../Search/Search';
// import Login from '../Login/Login';
import search from './search.svg'

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
          <Link to={'#'}>Search</Link>
          <Link to={'#'}>Register</Link>
          {/* <Search /> */}
          {/* Will link to Login page */}
          <Link to={'#'}>Login</Link>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
