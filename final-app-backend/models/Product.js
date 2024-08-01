const mongoose = require('mongoose');

// TODO: Your Schema. Do NOT USE Book, Person or Car
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  description: String,
  price: Number,
  category: String,
  stock : Number,
  imageLink : String
  
});


// TODO: Model, rename it from "myModel" to whatever your model is called.
const productModel = mongoose.model('Product', productSchema);

// Export your Model, rename this to your model name
module.exports = productModel;