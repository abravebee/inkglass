//== Imports ==//
const User = require("../models/users");
const mongoose = require('mongoose');
//const User = model('User');
var ObjectId = require("mongodb").ObjectID;

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

  // user.save(err => {
  //   if (err) return next(err);
  //   res.send("New user added!");
  //   console.log(user);
  // });

  user.save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(422);
      res.json({ stack: err.stack, message: err.message });
    })
};

//Read All Users
exports.readAll = (req, res) => {
  User.find({}, (err, users) => {
    let allUsers = [];

    users.map(u => {
      allUsers.push(u)
    });

    if (err) return next(err);
    res.send(allUsers);
  });
};


//Find a User
exports.readUser = (req, res) => {
  User.findById(req.params.userid, (err, user) => {
    if (err) return next(err);
    res.send(user);
  });
};

//Update a User
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.userid, { $set: req.body }, (err, user) => {
    if (err) return next(err);
    res.send(`User ${req.params.userid} updated!`);
  });
};

//Delete a User
exports.deleteUser = (req, res) => {
  User.findOneAndDelete(req.params.userid, err => {
    if (err) return next(err);
    res.send(`User ${req.params.userid} deleted!`);
  });
};

