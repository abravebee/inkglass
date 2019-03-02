//== Dependencies ==//
const express = require("express");
const router = express.Router();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const mongoose = require('mongoose');
var ObjectId = require("mongodb").ObjectID;

// User model
const User = require("../models/users");

//== Authentication ==//
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://bakerc.auth0.com/.well-known/jwks.json`
  }),

  //Validate the audience and the issuer.
  audience: `Ik8pcKF4QAFcSV7QCOIYDSj0CH2ahljb`,
  issuer: `https://bakerc.auth0.com`,
  algorithms: [`RS246`]
})

//Test Route
router.get("/test", usersController.test);

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