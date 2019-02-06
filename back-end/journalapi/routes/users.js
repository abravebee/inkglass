//Imports
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

//Test Route
router.get('/test', usersController.test);