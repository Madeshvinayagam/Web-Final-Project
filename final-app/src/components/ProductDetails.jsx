import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link, useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false); 
  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    setAddedToCart(true); 
  };

  const handleCheckout = () => {
    navigate(`/checkoutpage/${product._id}`);
  };

  return (
    <div className="container my-4">
      <div className="mb-4">
        <Link to="/" className="btn btn-secondary">
          Back to Homepage
        </Link>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <img 
            src={product.imageLink} 
            alt={product.name} 
            className="img-fluid rounded" 
            style={{ maxHeight: '400px', objectFit: 'contain' }} 
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3">{product.name}</h1>
          <p className="lead mb-3">${product.price}</p>
          <p>{product.description}</p>
          <button 
            className="btn btn-primary" 
            onClick={handleAddToCart} 
            disabled={addedToCart} 
          >
            {addedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          {addedToCart && (
            <div className="mt-3">
              <button 
                className="btn btn-success"
                onClick={handleCheckout}
              >
                Go to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
