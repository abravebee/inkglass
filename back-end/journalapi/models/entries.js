//Imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema Definition
let EntrySchema = new Schema({
  date: {type: Number, required: true},
  title: {type: String, required: false},
  mood: {type: String, required: true},
  lunar: {type: String, required: false},
  horo: {type: String, required: false},
  tarot: {type: Number, required: false},
  notes: {type: String, required: false},
})

//Export
module.exports = mongoose.model('Product', ProductSchema);