//Imports
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
//== Dependencies ==//
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

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
router.post("/create", usersController.createUser);

//Read All
router.get("/all", usersController.readAll)

//Read User
router.get("/:userid", usersController.readUser);

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
