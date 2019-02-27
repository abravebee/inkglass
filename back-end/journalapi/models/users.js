//Imports
const { Schema, model } = require('mongoose');

//Schema Definition
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
