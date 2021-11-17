const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").post(userController.addUser).get(userController.findAll);
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.findOneAndUpdate)
  .delete(userController.findByIdAndDelete);

module.exports = router;
