// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero1.jpg'; // Ensure the image path is correct

const HeroSection = () => (
  <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
    <div className="hero-content">
      <h1>Welcome to KitchenHall</h1>
      <p>Your one-stop shop for all kitchen needs</p>
      <button>Shop Now</button>
    </div>
  </section>
);

export default HeroSection;


