//Imports
var ObjectId = require("mongodb").ObjectID;
const User = require("../models/users");

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

  user.save((err) => {
    if (err) return next(err);
    res.send('New user added!').json(user)
    console.log(user)
  })
};
