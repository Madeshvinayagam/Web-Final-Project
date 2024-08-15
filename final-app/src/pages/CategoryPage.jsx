import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CategoryPage.css'; 

const CategoryPage = () => {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`, {
          params: { category }, // Ensure the category is passed as a query parameter
        });
        // Filter products to ensure category matches the query parameter
        const filteredProducts = response.data.filter(product => product.category.toLowerCase() === category.toLowerCase());
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    fetchProductsByCategory();
  }, [category]);

  return (
    <div>
      <div className="mb-4">
        <Link to="/" className="btn btn-secondary">
          Back to Homepage
        </Link>
      </div>
      <h1>Products in Category: {category}</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product._id} className="product-card">
              <img src={product.imageLink} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <Link to={`/product/${product._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
