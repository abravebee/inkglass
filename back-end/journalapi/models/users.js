//Imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema Definition
let UserSchema = new Schema({
  username: {type: String, required: true},
  name: {type: String, required: false},
  email: {type: String, required: false},
  birthday: {type: Number, required: false},
  astro: {type: String, required: false},
})

//Export
module.exports = mongoose.model('User', UserSchema);