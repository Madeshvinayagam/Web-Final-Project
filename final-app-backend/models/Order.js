const mongoose = require('mongoose');

// TODO: Your Schema. Do NOT USE Book, Person or Car
const orderSchema = new mongoose.Schema({

  email: String,
  productName: String,
  totalPrice: Number,
  status: String

});


// TODO: Model, rename it from "myModel" to whatever your model is called.
const orderModel = mongoose.model('Order', orderSchema);

// Export your Model, rename this to your model name
module.exports = orderModel;