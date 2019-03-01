//Imports
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//Test Route
router.get("/test", usersController.test);

//CRUD
//Create User
router.post("/create", usersController.createUser);

//Read All
router.get("/all", usersController.readAll)

//Read User
router.get("/:id", usersController.readUser);

//Update User
router.put("/:id/update", usersController.updateUser);

//Delete User
router.delete("/:id/delete", usersController.deleteUser);

module.exports = router;
