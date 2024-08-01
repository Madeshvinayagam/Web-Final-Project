const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const productModel = require('./models/Product');
const userModel = require('./models/User');
const orderModel = require('./models/Order');

const app = express();
app.use(bodyParser.json());

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
app.post('/products', async (req, res) => {
  try {
    const { name, brand, description, price, category, stock, imageLink } = req.body;
    const product = new productModel({ name, brand, description, price, category, stock, imageLink });
    const result = await product.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const result = await productModel.updateOne({ _id: id }, { $set: { price } });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productModel.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User CRUD //
app.post('/users', async (req, res) => {
  try {
    const { name, password, email, role } = req.body;
    const user = new userModel({ name, password, email, role });
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const result = await userModel.updateOne({ _id: id }, { $set: { email } });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userModel.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Order CRUD //
app.post('/orders', async (req, res) => {
  try {
    const { email, productName, totalPrice, status } = req.body;
    const order = new orderModel({ email, productName, totalPrice, status });
    const result = await order.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/orders', async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/orders/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await orderModel.updateOne({ _id: id }, { $set: { status } });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/orders/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await orderModel.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Perform CRUD operations (for testing purposes)
const performCRUDOperations = async () => {
  const newProduct1 = await createProduct('iPhone 12', 'Apple', 'Flagship Performance', 999, 'Electronics', 10, 'image_url');
  const newProduct2 = await createProduct('Galaxy S22', 'Samsung', 'Camera All-rounder', 1200, 'Electronics', 15, 'image_url');

  const newUser1 = await createUser('Madesh', 'madesh123', 'madesh@email.com', 'Admin');
  const newUser2 = await createUser('Raina', 'raina123', 'raina@email.com', 'Customer');

  const newOrder = await createOrder('madesh@email.com', 'iPhone 12', 999, 'Successful');

  // READ
  await readProducts();
  await readUsers();
  await readOrders();
};

// CRUD functions
const createProduct = async (name, brand, description, price, category, stock, imageLink) => {
  return new productModel({ name, brand, description, price, category, stock, imageLink })
    .save()
    .then(result => {
      console.log('Product Created Successfully:', result);
      return result;
    })
    .catch(error => {
      console.error('Error creating Product:', error);
      return null;
    });
};

const readProducts = async () => {
  const productList = await productModel.find();
  console.log('All Products:', productList);
};

const updateProduct = async (id, newPrice) => {
  const result = await productModel.updateOne({ _id: id }, { $set: { price: newPrice } });
  console.log('Product Updated Successfully:', result);
};

const deleteProduct = async (id) => {
  const result = await productModel.deleteOne({ _id: id });
  console.log('Product Deleted Successfully:', result);
};

const createUser = async (name, password, email, role) => {
  return new userModel({ name, password, email, role })
    .save()
    .then(result => {
      console.log('User Created Successfully:', result);
      return result;
    })
    .catch(error => {
      console.error('Error creating User:', error);
      return null;
    });
};

const readUsers = async () => {
  const userList = await userModel.find();
  console.log('All Users:', userList);
};

const updateUser = async (id, newEmail) => {
  const result = await userModel.updateOne({ _id: id }, { $set: { email: newEmail } });
  console.log('User Updated Successfully:', result);
};

const deleteUser = async (id) => {
  const result = await userModel.deleteOne({ _id: id });
  console.log('User Deleted Successfully:', result);
};

const createOrder = async (email, productName, totalPrice, status) => {
  return new orderModel({ email, productName, totalPrice, status })
    .save()
    .then(result => {
      console.log('Order Created Successfully:', result);
      return result;
    })
    .catch(error => {
      console.error('Error creating Order:', error);
      return null;
    });
};

const readOrders = async () => {
  const orderList = await orderModel.find();
  console.log('All Orders:', orderList);
};

const updateOrder = async (id, newStatus) => {
  const result = await orderModel.updateOne({ _id: id }, { $set: { status: newStatus } });
  console.log('Order Updated Successfully:', result);
};

const deleteOrder = async (id) => {
  const result = await orderModel.deleteOne({ _id: id });
  console.log('Order Deleted Successfully:', result);
};
