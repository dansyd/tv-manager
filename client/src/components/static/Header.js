import React from 'react';
import './css/Header.css';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            TV Manager
          </div>
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <a href="#">Sign In</a>
            <a href="#">Sign Up</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
