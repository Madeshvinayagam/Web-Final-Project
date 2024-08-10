const mongoose = require('mongoose');
const Order = require('./models/Order');

// MongoDB connection URI
const mongoUri = 'mongodb+srv://madeshv:madeshv@cluster0.jzmchug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Dummy orders
    const orders = [
      {
        email: 'madesh@example.com',
        productName: 'Samsung S24',
        totalPrice: 899.99,
        status: 'Shipped'
      },
      {
        email: 'raina@example.com',
        productName: 'iPhone 15 Pro Max',
        totalPrice: 1099.99,
        status: 'Pending'
      },
      {
        email: 'madesh@example.com',
        productName: 'Google Pixel 8 Pro',
        totalPrice: 999.99,
        status: 'Delivered'
      }
    ];

    // Insert dummy orders into the database
    await Order.insertMany(orders);
    console.log('Dummy orders inserted');

    // Close the connection
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
