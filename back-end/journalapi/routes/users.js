//Imports
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

//Test Route
router.get('/test', usersController.test);

//CRUD
//Create User
router.post('/create', usersController.createUser);

//Read User
router.get('/:id', usersController.readUser);

module.exports = router;