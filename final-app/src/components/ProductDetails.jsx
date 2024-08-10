import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetails;
