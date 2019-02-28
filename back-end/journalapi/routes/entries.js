//Imports
const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entriesController");


//Test Route
router.get("/test", entriesController.test);


//CRUD
//Create Entry
router.post("/:id/create", entriesController.createEntry);

//Read all Entries from User
router.get("/:id/all", entriesController.readAllEntries);


module.exports = router;