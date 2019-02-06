//Imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Entry = require('../models/entries');

//Schema Definition
let UserSchema = new Schema({
  username: {type: String, required: true},
  name: {type: String, required: false},
  email: {type: String, required: false},
  birthday: {type: Number, required: false},
  astro: {type: String, required: false},
  entries: [Entry]
})

//Export
module.exports = mongoose.model('User', UserSchema);