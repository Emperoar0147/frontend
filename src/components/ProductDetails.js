// src/components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: This is a detailed description of {product.name}.</p>
    </div>
  );
};

export default ProductDetails;
