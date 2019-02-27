//Imports
const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/usersController");


//Test Route
router.get("/test", entriesController.test);

