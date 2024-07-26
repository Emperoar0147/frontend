// src/components/FeaturedProducts.js
import React from 'react';
import './FeaturedProducts.css'; // Add your custom CSS

const FeaturedProducts = () => (
  <section className="featured-products">
    <h2>Featured Products</h2>
    <div className="product-list">
      {/* Replace with dynamic data or API call */}
      <div className="product-item">Product 1</div>
      <div className="product-item">Product 2</div>
      <div className="product-item">Product 3</div>
    </div>
  </section>
);

export default FeaturedProducts;
