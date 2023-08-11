// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar__brand">
        <Link to="/home">Online Shopping Store</Link>
      </div>
      <div className={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/orders">Order Management</Link>
        <Link to="/clerk">Store Clerk</Link>
        <Link to="/admin">Admin</Link>
        <span className='span'>Logout</span>
      </div>
      
      <div className="navbar__menu-toggle" onClick={handleMenuToggle}>
        
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
