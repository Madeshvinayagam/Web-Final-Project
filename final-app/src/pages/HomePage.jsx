// src/pages/HomePage.js
import React from 'react';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList'; // Import the CategoryList component

const HomePage = () => {
  return (
    <div>
      <main>
        <h1 className="text-head">The Chennai Mobiles</h1>
        <CategoryList /> {/* Display the categories */}
        <ProductList /> {/* Display the list of products */}
      </main>
    </div>
  );
};

export default HomePage;
