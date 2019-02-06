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
    username: { type: String, required: true },
    name: { type: String, required: false },
    email: { type: String, required: true },
    birthday: { type: Number, required: false },
    astro: { type: String, required: false }
  });

  user.save(err => {
    if (err) return next(err);
    res.send('New user added!').json(user)
    console.log(user)
  })
};
