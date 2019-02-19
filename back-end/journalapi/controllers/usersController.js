//== Imports ==//
//const User = require("../models/users");
const mongoose = require('mongoose');
const User = mongoose.model('User'); // experimenting w different syntax
const Entry = mongoose.model('Entry');
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

exports.createUser = (req, res) => {
  
};

// Post.findOneAndUpdate(
//   {"_id": req.params.id}, 
//   {$push: {comments: {
//       comment: "Hello World",
//       user: "933ujrfn393r"
//   }}
// }).then(function (post) {
//   console.log(post);
//   res.json({success: true});
// });


// let user = new User({name : 'Mary', age : 36, cohort : 2019})
// let address = new Address({ city : 'Houston', state : 'TX'})

// user.addresses.push(address)


// user.save(function(error,newUser){
//   console.log(newUser)
// })