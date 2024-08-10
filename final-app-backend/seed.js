const mongoose = require('mongoose');
const Product = require('./models/Product');

// MongoDB connection URI
const mongoUri = 'mongodb+srv://madeshv:madeshv@cluster0.jzmchug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Dummy products
    const products = [
      {
        name: 'Samsung S24',
        brand: 'Samsung',
        description: 'Latest Samsung smartphone',
        price: 899.99,
        category: 'Smartphones',
        stock: 50,
        imageLink: 'https://example.com/samsung-s24.jpg'
      },
      {
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        description: 'Newest iPhone with advanced features',
        price: 1099.99,
        category: 'Smartphones',
        stock: 30,
        imageLink: 'https://example.com/iphone-15-pro-max.jpg'
      },
      {
        name: 'Google Pixel 8 Pro',
        brand: 'Google',
        description: 'Flagship Google smartphone with the latest tech',
        price: 999.99,
        category: 'Smartphones',
        stock: 20,
        imageLink: 'https://example.com/google-pixel-8-pro.jpg'
      }
    ];

    // Insert dummy products into the database
    await Product.insertMany(products);
    console.log('Dummy products inserted');

    // Close the connection
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
