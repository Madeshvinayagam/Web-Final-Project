import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import './CategoryPage.css'; // Import CSS for styling

const CategoryPage = () => {
  const { category } = useParams(); // Extract category from URL params
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`, {
          params: { category }, // Send category as query param
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    fetchProductsByCategory();
  }, [category]);

  return (
    <div>
      <h1>Products in Category: {category}</h1>
      <div className="product-grid">
        {products.map(product => (
          <Link to={`/product/${product._id}`} key={product._id} className="product-card-link">
            <div className="product-card">
              <img src={product.imageLink} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
