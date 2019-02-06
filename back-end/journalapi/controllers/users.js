//Imports
var ObjectId = require('mongodb').ObjectID;
const User = require('../models/users');

//Test Route
exports.test = function (req, res) {
  res.send('Users are connected.');
  console.log('Reached user test function!')
}