const mongoose = require('mongoose');

// TODO: import your module. rename this to your modelname
const productModel = require('./models/Product');
const userModel = require('./models/User');
const orderModel = require('./models/Order');

// TODO: Insert your connection string and modify this code to work
mongoose.connect('mongodb+srv://madeshv:madeshv@cluster0.jzmchug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    await performCRUDOperations();
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });

  // Product CRUD //
  // TODO: Create
const createProduct = async (name, brand, description, price, category, stock, imageLink ) => {
    return new productModel({ name, brand, description, price, category, stock, imageLink })
      .save()
      .then(result => {
        console.log('Product Created Successfully : ', result);
        return result;
      })
      .catch(error => {
        console.error('Error creating Product : ', error);
        return null;
      });
  };
  
  
  // TODO: Read
  const readProducts = async () => {
    const productList = await productModel.find();
    console.log('All Products : ', productList);
  };
  
  // TODO: Update
  const updateProduct = async (id, newPrice) => {
    const result = await productModel.updateOne({ _id: id }, { $set: { price: newPrice}});
    console.log('Product Updated Successfully : ', result);
  };
  
  // TODO: Delete
  const deleteProduct = async (id) => {
    const result = await productModel.deleteOne({ _id: id });
    console.log('Product Deleted Successfully : ', result);
  };

  // User CRUD //
  // TODO: Create
const createUser = async (name, password, email, role) => {
    return new userModel({ name, password, email, role})
      .save()
      .then(result => {
        console.log('User Created Successfully : ', result);
        return result;
      })
      .catch(error => {
        console.error('Error creating User : ', error);
        return null;
      });
  };
  
  
  // TODO: Read
  const readUsers = async () => {
    const userList = await orderModel.find();
    console.log('All Users : ', userList);
  };
  
  // TODO: Update
  const updateUser = async (id, newEmail) => {
    const result = await userModel.updateOne({ _id: id }, { $set: { email: newEmail}});
    console.log('User Updated Successfully : ', result);
  };
  
  // TODO: Delete
  const deleteUser = async (id) => {
    const result = await userModel.deleteOne({ _id: id });
    console.log('User Deleted Successfully : ', result);
  };

  // Order CRUD
  // TODO: Create
const createOrder = async (email, productName, totalPrice, status) => {
    return new orderModel({email, productName, totalPrice, status})
      .save()
      .then(result => {
        console.log('Order Created Successfully : ', result);
        return result;
      })
      .catch(error => {
        console.error('Error creating Order : ', error);
        return null;
      });
  };
  
  
  // TODO: Read
  const readOrders = async () => {
    const orderList = await orderModel.find();
    console.log('All Order : ', orderList);
  };
  
  // TODO: Update
  const updateOrder = async (id, newStatus) => {
    const result = await orderModel.updateOne({ _id: id }, { $set: { status: newStatus}});
    console.log('Order Updated Successfully : ', result);
  };
  
  // TODO: Delete
  const deleteOrder = async (id) => {
    const result = await orderModel.deleteOne({ _id: id });
    console.log('Order Deleted Successfully : ', result);
  };

  // TODO: Sequential CRUD Operations
  const performCRUDOperations = async () => {
    const newProduct1 = await createProduct('iPhone 12', 'Apple', 'Flagship Performance', 999);
    const newProduct2 = await createProduct('Galaxy S22', 'Samsung', 'Camera All-rounder',  1200);

    const newUser1 = await createUser('Madesh', 'madesh123', 'madesh@email.com', 'Admin');
    const newUser2 = await createUser('Raina', 'raina123', 'raina@email.com', 'Customer');

    const newOrder = await createOrder('madesh1@email.com', 'iPhone 12', 999, 'Successful');
    
    
  
    // READ
    await readProducts();
    await readUsers();
    await readOrders();

    
  };

  
  
  