//== Imports ==//
const { Schema, model } = require('mongoose');

//== Schema Definition ==//
let EntrySchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true 
  },
  dateCreated: { 
    type: Object, 
    required: true 
  },
  dateModified: {
    type: Object,
    required: false
  },
  title: { 
    type: String, 
    required: false,
    trim: true
  },
  mood: { 
    type: String, 
    required: true,
    trim: true
  },
  lunarPhase: { 
    type: String, 
    required: false,
    trim: true
  },
  horoscope: { 
    type: String, 
    required: false, 
    trim: true
  },
  tarot: { 
    type: Number, 
    required: false,
    trim: true
  },
  reflections: { 
    type: String, 
    required: false,
    trim: true
  }
});

module.exports = model("Entry", EntrySchema);