//Imports
var ObjectId = require('mongodb').ObjectID;
const Entries = require('../models/entries');

//Test Route
exports.test = function (req, res) {
  res.send('<h1>The prophecy is true.</h1>');
  console.log('Boom.');
}

