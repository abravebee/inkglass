//Imports
const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entries');

//Test Route
router.get('/test', entriesController.test);

//CRUD
//Create
router.post('/create', entriesController.entryCreate);


module.exports = router;