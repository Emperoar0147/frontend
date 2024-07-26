// src/components/ProductCategories.js
import React from 'react';
import './ProductCategories.css'; // Add your custom CSS

const categories = [
  'Cookware',
  'Cutlery',
  'Bakeware',
  'Utensils',
  'Small Appliances'
];

const ProductCategories = () => (
  <section className="categories">
    <h2>Shop by Category</h2>
    <div className="category-list">
      {categories.map(category => (
        <div className="category-item" key={category}>
          <h3>{category}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default ProductCategories;
