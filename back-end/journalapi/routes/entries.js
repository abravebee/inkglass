//Imports
const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entries');

//Test Route
router.get('/test', entriesController.test);

module.exports = router;