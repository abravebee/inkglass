const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema Definition
let EntrySchema = new Schema({
  date: {type: Number, required: true},
  mood: {type: String, required: true},
  lunar: {type: String, required: false},
  horo: {type: String, required: false},
  tarot: {type: String, required: false},
  ritual: {type: String, required: false},
  notes: {type: String, required: false},
})