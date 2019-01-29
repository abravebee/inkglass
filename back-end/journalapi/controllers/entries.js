//Imports
var ObjectId = require('mongodb').ObjectID;
const Entries = require('../models/entries');

//Test Route
exports.test = function (req, res) {
  res.send('The prophecy is true.');
  console.log('Boom.');
}
