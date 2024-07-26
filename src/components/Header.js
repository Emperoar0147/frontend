// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import './Header.css'; // Add your custom CSS

const Header = () => (
  <header className="header">
    <div className="logo">
      <Link to="/">KitchenHall</Link>
    </div>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <div className="cart-icon-container">
      <CartIcon />
    </div>
  </header>
);

export default Header;


