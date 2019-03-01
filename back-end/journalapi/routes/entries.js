//Imports
const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entriesController");


//Test Route
router.get("/test", entriesController.test);


//CRUD
//Create Entry
router.post("/:userid/create", entriesController.createEntry);

//Read all Entries from User
router.get("/:userid/all", entriesController.readAllEntries);

//Read Single Entry
router.get("/:userid/:entryid")

module.exports = router;