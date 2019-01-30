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
    res.send('Entry created successfully').json(entry)
    console.log(entry)
  });
};

//Read
exports.entrySingle = (req, res) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err) return next(err);
    res.send(entry);
  });
};

//Update
exports.entrySingleUpdate = (req, res) => {
  Entry.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, entry) => {
    if (err) return next(err);
    res.send('Entry updated');
  });
};

//Delete
exports.entrySingleDelete = (req, res) => {
  Entry.findOneAndDelete(req.params.id, (err) => {
    if(err) return next(err);
    res.send('Entry deleted.')
  })
}