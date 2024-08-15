import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage';
import AllCategoryPage from '../pages/AllCategoryPage';
import CartPage from '../pages/CartPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductList from './ProductList';
import AboutPage from '../pages/AboutPage';
import CheckoutPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import AdminDashboard from '../pages/AdminDashboard'; 
import UserDashboard from '../pages/UserDashboard';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProductIndex = prevCartItems.findIndex((item) => item.id === product.id);
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
        <Header />
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/checkoutpage/:productId" element={<CheckoutPage />} />
            <Route path="/" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
