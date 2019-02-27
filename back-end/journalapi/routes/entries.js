//Imports
const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/usersController");


//Test Route
router.get("/test", entriesController.test);


//CRUD
//Create Entry
router.post("/:id/create", entriesController.createEntry);

//Read all entries from user
router.get("/:id/all", entriesController.readAllEntries);


module.exports = router;