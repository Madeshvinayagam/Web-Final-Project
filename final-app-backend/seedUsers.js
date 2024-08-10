const mongoose = require('mongoose');
const User = require('./models/User');

// MongoDB connection URI
const mongoUri = 'mongodb+srv://madeshv:madeshv@cluster0.jzmchug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Dummy users
    const users = [
      {
        name: 'Madesh',
        password: 'adminpassword',  // Consider using a hashed password in a real application
        email: 'madesh@example.com',
        role: 'admin'
      },
      {
        name: 'Raina',
        password: 'customerpassword',  // Consider using a hashed password in a real application
        email: 'raina@example.com',
        role: 'customer'
      }
    ];

    // Insert dummy users into the database
    await User.insertMany(users);
    console.log('Dummy users inserted');

    // Close the connection
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
