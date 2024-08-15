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
        imageLink: 'https://cdn.pixabay.com/photo/2019/12/27/01/46/samsung-4721542_1280.jpg'
      }
      ,
      {
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        description: 'Newest iPhone with advanced features',
        price: 1099.99,
        category: 'Smartphones',
        stock: 30,
        imageLink: 'https://cdn.pixabay.com/photo/2022/05/04/07/38/iphone-13-pro-max-7173413_1280.jpg'
      },
      {
        name: 'Google Pixel 8 Pro',
        brand: 'Google',
        description: 'Flagship Google smartphone with the latest tech',
        price: 999.99,
        category: 'Smartphones',
        stock: 20,
        imageLink: 'https://cdn.pixabay.com/photo/2022/10/14/09/58/google-pixel-7520958_1280.jpg'
      },
      {
        name: 'Magsafe charger 20W',
        brand: 'Apple',
        description: 'Latest magnetic charger for apple devices',
        price: 150.00,
        category: 'Chargers',
        stock: 20,
        imageLink: 'https://media.istockphoto.com/id/1363305356/photo/battery-charger-isolated-on-white-background-wireless-charger-close-up.jpg?s=2048x2048&w=is&k=20&c=fdAqO7Y0buKwf41ZlqA_XI-etQM0xS0JhFENDw3Tkig='
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
