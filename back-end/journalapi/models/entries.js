//== Imports ==//
const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
  _parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Entry", EntrySchema);