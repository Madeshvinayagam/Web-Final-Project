const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 


const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

// Database connection
mongoose.connect('mongodb+srv://madeshv:madeshv@cluster0.jzmchug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Product CRUD //
app.post('/product', async (req, res) => {
  try {
    const { name, brand, description, price, category, stock, imageLink } = req.body;
    const product = new Product({ name, brand, description, price, category, stock, imageLink });
    const result = await product.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const result = await Product.updateOne({ _id: id }, { $set: { price } });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User CRUD //
app.post('/users', async (req, res) => {
  try {
    const { name, password, email, role } = req.body;
    const user = new User({ name, password, email, role });
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const result = await User.updateOne({ _id: id }, { $set: { email } });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Order CRUD //
app.post('/order', async (req, res) => {
  try {
    const { email, productName, totalPrice, status } = req.body;
    const order = new Order({ email, productName, totalPrice, status });
    const result = await order.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await Order.updateOne({ _id: id }, { $set: { status } });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Order.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get unique categories
app.get('/categories', async (req, res) => {
  try {
    // Find all products and extract unique categories
    const products = await Product.find().distinct('category');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all unique categories
app.get('/category', async (req, res) => {
  try {
    // Find all unique categories from products
    const categories = await Product.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

