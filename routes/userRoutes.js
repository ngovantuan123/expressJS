const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").post(userController.addUser).get(userController.findAll);

module.exports = router;
