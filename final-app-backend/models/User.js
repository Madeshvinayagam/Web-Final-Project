const mongoose = require('mongoose');

// TODO: Your Schema. Do NOT USE Book, Person or Car
const userSchema = new mongoose.Schema({
  name: String,
 password: String,
 email: String,
 role: String
  
});


// TODO: Model, rename it from "myModel" to whatever your model is called.
const userModel = mongoose.model('User', userSchema);

// Export your Model, rename this to your model name
module.exports = userModel;