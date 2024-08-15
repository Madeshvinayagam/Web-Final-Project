// src/components/Cart.js
import React, { useState } from 'react';

const Cart = ({ cartItems, onRemove, onQuantityChange }) => {
  // Remove sample data; use cartItems passed as props

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => onRemove(item.id)}>Remove</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
                min="1"
              />
            </li>
          ))}
        </ul>
      )}
      <p>Total Price: ${totalPrice}</p>
    </section>
  );
};

export default Cart;
