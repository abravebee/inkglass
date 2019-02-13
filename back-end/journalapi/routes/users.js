//Imports
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

//Test Route
router.get("/test", usersController.test);

//CRUD
//Create User
router.post("/create", usersController.createUser);

//Read User
router.get("/:id", usersController.readUser);

//Update User
router.put("/:id/update", usersController.updateUser);

//Delete User
router.delete("/:id/delete", usersController.deleteUser);

module.exports = router;
