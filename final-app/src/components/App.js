import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage';
import AllCategoryPage from '../pages/AllCategoryPage';
import CartPage from '../pages/CartPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

// API functions using axios
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/product/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const response = await axios.post(`${apiUrl}/product`, product, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${apiUrl}/product/${id}`, product, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/product/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error);
    throw error;
  }
};

// User API functions
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Order API functions
export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${apiUrl}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Component to handle fetching products and displaying them
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Product Listing</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prevCartItems => {
      const existingProductIndex = prevCartItems.findIndex(item => item.id === product.id);
      if (existingProductIndex > -1) {
        // Product already in cart, update quantity
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingProductIndex].quantity += 1; // Adjust quantity increment
        return updatedCartItems;
      } else {
        // New product, add to cart
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Include Header component */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/category" element={<AllCategoryPage />} />
            <Route 
              path="/product/:id" 
              element={<ProductDetailsPage onAddToCart={handleAddToCart} />} 
            />
            <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </main>
        <Footer /> {/* Include Footer component */}
      </div>
    </Router>
  );
};

export default App;
