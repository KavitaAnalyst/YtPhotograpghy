// src/components/Navbar.js
// import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src = {logo} alt="Logo" style={{ height: '100px', marginRight: '10px', marginTop:'10px'}} /></Link>
      </div>
      <div>
      <ul className="nav-links" style={{ listStyle: 'none', padding: '0', margin: '0', textAlign: 'center' }}>
      {/* <li><Link to="/">Home</Link></li> */}
      <li><Link to="/about">About</Link></li>
      <li className="dropdown">
        <Link to="/gallery">Portfolio</Link>
        <ul className="dropdown-menu" style={{ listStyle: 'none', padding: '0', margin: '0', display: 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <li><Link to="/animals" style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>Animals</Link></li>
          <li><Link to="/birds" style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>Birds</Link></li>
          <li><Link to="/nature" style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>Nature</Link></li>
        </ul>
      </li> 
      <li><Link to="/blogs">Blogs</Link></li>
    </ul>
      </div>
      
    </nav>
  );
}
export default Navbar;

