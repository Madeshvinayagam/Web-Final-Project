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
  
  // TODO: Sequential CRUD Operations
  const performCRUDOperations = async () => {
    const newProduct1 = await createProduct('iPhone 12', 'Apple', 'Flagship Performance', 999, 'Smartphone', 5, 'imageLink_1');
    const newProduct2 = await createProduct('Galaxy S22', 'Samsung', 'Camera All-rounder',  1200, 'Smartphone', 2, 'imageLink_2');
    
  
    // READ
    await readProducts();
  
    // Get the ID of the first product
    const productId = newProduct1._id;
    const productId2 = newProduct2._id;
  
  
    // Update the price of the first product
    await updateProduct(productId, 700);
    console.log('Updated the Product price!');
  
    // Read all product after updating
    await readProducts();
  
    // Delete the first product
    // await deleteProduct(productId2);
    // console.log('Deleted the Second product!');
    // await readProducts();
    
  };
  