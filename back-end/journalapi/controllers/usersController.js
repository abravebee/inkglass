//== Imports ==//
//const User = require("../models/users");
const mongoose = require('mongoose');
const User = mongoose.model('User'); // experimenting w different syntax
const Entry = mongoose.model('Entry');
var ObjectId = require("mongodb").ObjectID;

//== Semantic Global Variables ==//
const STATUS_USER_ERROR = 422;

//Test Route
exports.test = function(req, res) {
  res.send("Users are connected.");
  console.log("Reached user test function!");
};

//Create User
exports.createUser = (req, res) => {
  let user = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    birthday: req.body.birthday,
    astro: req.body.astro
  });

  user.save(err => {
    if (err) return next(err);
    res.send("New user added!");
    console.log(user);
  });
};

//Find a User
exports.readUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return next(err);
    res.send(user);
  });
};

//Update a User
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err) return next(err);
    res.send(`User ${req.params.id} updated!`);
  });
};

//Delete a User
exports.deleteUser = (req, res) => {
  User.findOneAndDelete(req.params.id, err => {
    if (err) return next(err);
    res.send(`User ${req.params.id} deleted!`);
  });
};
