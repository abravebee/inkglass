//Imports
var ObjectId = require('mongodb').ObjectID;
const Entry = require('../models/entries');

//Test Route
exports.test = function (req, res) {
  res.send('The prophecy is true.');
  console.log('Boom.');
}

//CRUD
//Create
exports.entryCreate = (req, res) => {
  let entry = new Entry(
    {
      date: req.body.date,
      title: req.body.title,
      mood: req.body.mood,
      lunar: req.body.lunar,
      horo: req.body.horo,
      tarot: req.body.tarot,
      notes: req.body.notes
    }
  );

  entry.save((err) => {
    if(err) return next(err);
    res.send('Entry created successfully')
    console.log(entry)
  });
};
