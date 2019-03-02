//== Dependencies ==//
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
var ObjectId = require("mongodb").ObjectID;
const checkJwt = require("./auth.js/index.js")

// User model
const User = require("../models/users");

//Test Route
router.get("/test", (req, res) => {
  res.send("Entries are connected.");
  console.log("Reached entry test function!");
});

//CRUD
//Create User
router.post("/create", (req, res) => {
  let user = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    birthday: req.body.birthday,
    astro: req.body.astro
  });

  user.save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(422);
      res.json({ stack: err.stack, message: err.message });
    })
});

//Read All
router.get("/all", (req, res) => {
  User.find({}, (err, users) => {
    let allUsers = [];

    users.map(u => {
      allUsers.push(u)
    });

    if (err) return next(err);
    res.send(allUsers);
  });
})

//Read User
router.get("/:userid", (req, res) => {
  User.findById(req.params.userid, (err, user) => {
    if (err) return next(err);
    res.send(user);
  });
});

//Update User
router.put("/:userid/update", checkJwt, (req, res) => {
  //change to findoneandupdate?
  User.findByIdAndUpdate(req.params.userid, { $set: req.body }, (err, user) => {
    if (err) return next(err);
    res.send(`User ${req.params.userid} updated!`);
  });
});

//Delete User
router.delete("/:userid/delete", checkJwt, (req, res) => {
  User.findOneAndDelete(req.params.userid, err => {
    if (err) return next(err);
    res.send(`User ${req.params.userid} deleted!`);
  });
});

module.exports = router;