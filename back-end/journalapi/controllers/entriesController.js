//Imports
const mongoose = require("mongoose");
const Entry = require("../models/entries");

//Test Route
exports.test = function(req, res) {
  res.send("Entries are connected.");
  console.log("Reached entry test function!");
};

//Create Entry
exports.createEntry = (req, res) => {
  let entry = new Entry({
    user: req.params.id,
    dateCreated: Date.now(),
    title: req.body.title,
    mood: req.body.mood,
    lunarPhase: req.body.lunarPhase,
    horoscope: req.body.horoscope,
    tarot: req.body.tarot,
    reflections: req.body.reflections
  });

  entry.save()
    .then((entry) => {
      res.json(entry);
    })
    .catch((err) => {
      res.status(422);
      res.json({ stack: err.stack, message: err.message });
    })
}

//Find all Entries from a Given User
exports.readAllEntries = (req, res) => {
  Entry.find({ user: req.params.userid }, (err, entries) => {
    let allEntries = [];
    
    entries.map(e => {
      allEntries.push(e)
    })

    if (err) return next(err);
    res.send(allEntries)
  })
};

//Find a Single Entry
exports.readEntry = (req, res) => {
  Entry.findById(req.params.entryid, (err, entry) => {
    if (err) return next(err);
    res.send(entry)
  })
}

//Update a Single Entry
exports.updateEntry = (req, res) => {
  Entry.findByIdAndUpdate(req.params.entryid, (err, entry) => {
    if (err) return next(err);
    res.send(`Entry ${req.params.entryid} updated`)
  })
}

//Delete a Single Entry