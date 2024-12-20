// src/components/Navbar.js
// import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Logo */}
        <Link to="/"><img src = {logo} alt="Logo" style={{ height: '100px', marginRight: '10px', marginTop:'10px'}} /></Link>
      </div>
      {/* Navigation Links */}
      <div>
      <ul className="nav-links" style={{ listStyle: 'none', padding: '0', margin: '0', textAlign: 'center' }}>
      {/* <li><Link to="/">Home</Link></li> */}
      <li><Link to="/about">About</Link></li>
      {/* Dropdown for portfolio */}

      <li 
      className="dropdown"
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
      >
        <span className="dropdown-trigger">Portfolio</span>
        {dropdownVisible && (
          <ul className="dropdown-menu">
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li><Link to="/birds">Birds</Link>
            </li>
              <li><Link to ="/nature">Nature</Link></li>
          </ul>
        )}
      </li> 
      <li><Link to="/blogs">Blogs</Link></li>
    </ul>
      </div>
      
    </nav>
  );
}
export default Navbar;

