//Imports
const { Schema, model } = require('mongoose');

//Schema Definition
let EntrySchema = new Schema({
  author: { type: Schema.ObjectId },
  date: { type: Number, required: true },
  title: { type: String, required: false },
  mood: { type: String, required: true },
  lunar: { type: String, required: false },
  horo: { type: String, required: false },
  tarot: { type: Number, required: false },
  notes: { type: String, required: false }
});

let UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  birthday: { 
    type: Number, required: false 
  },
  astro: { 
    type: String, 
    required: false 
  },
  entries: [{ type: Schema.Types.ObjectId, ref: 'Entry'}]
});

//Export
module.exports = model("User", UserSchema);
