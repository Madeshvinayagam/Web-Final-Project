import React, { useState } from 'react';
import axios from 'axios';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productName: '',
    totalPrice: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Send form data to your server
      const userResponse = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
        name: formData.name,
        email: formData.email,
        role: 'user' // Default role; adjust as needed
      });

      const orderResponse = await axios.post(`${process.env.REACT_APP_API_URL}/orders`, {
        email: formData.email,
        productName: formData.productName,
        totalPrice: formData.totalPrice
      });

      setSuccess('Order placed successfully!');
      setFormData({
        name: '',
        email: '',
        productName: '',
        totalPrice: 0
      });
    } catch (err) {
      console.error('Error placing order:', err);
      setError('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Total Price:
            <input
              type="number"
              name="totalPrice"
              value={formData.totalPrice}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Place Order'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
};

export default CheckoutPage;
