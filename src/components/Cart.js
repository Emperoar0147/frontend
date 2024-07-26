// src/components/Cart.js
import React from 'react';
import './Cart.css'; // Import additional CSS for cart if needed

const Cart = ({ items }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {items.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;

