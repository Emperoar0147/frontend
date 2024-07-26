// src/App.js
import React from 'react';
import Header from './components/Header';
import Cart from './components/Cart'; // Ensure this is used if necessary
import CartIcon from './assets/cart-icon.svg';
import HeroSection from './components/HeroSection';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>KitchenHall</h1>
        </header>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


