import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CheckoutPage = () => {
  const { productId } = useParams(); 
  const [formData, setFormData] = useState({
    email: '',
    productName: '',
    totalPrice: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/${productId}`);
        setProduct(response.data);
        setFormData(prevData => ({
          ...prevData,
          productName: response.data.name,
          totalPrice: response.data.price
        }));
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to fetch product details.');
      }
    };

    fetchProduct();
  }, [productId]);

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
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/order`, {
        email: formData.email,
        productName: formData.productName,
        totalPrice: formData.totalPrice,
        status: 'Pending'
      });

      if (response.status === 201) {
        setSuccess('Order placed successfully!');
        setFormData({
          email: '',
          productName: '',
          totalPrice: 0
        });
      } else {
        setError('Unexpected response from the server.');
      }
    } catch (err) {
      console.error('Error placing order:', err);
      if (err.response) {
        setError(`Error: ${err.response.data.error || 'Failed to place order. Please try again.'}`);
      } else {
        setError('Failed to place order. Please check your connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <Link to="/" className="btn btn-secondary">
          Back to Homepage
        </Link>
      </div>
      <h1>Checkout</h1>
      {product ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Name:</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              readOnly
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Total Price:</label>
            <input
              type="number"
              name="totalPrice"
              value={formData.totalPrice}
              readOnly
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Processing...' : 'Place Order'}
          </button>
          {error && <p className="text-danger mt-2">{error}</p>}
          {success && <p className="text-success mt-2">{success}</p>}
        </form>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default CheckoutPage;
