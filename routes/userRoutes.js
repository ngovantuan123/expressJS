const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// router.route("/").post(userController.addUser).get(userController.findAll);
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.findOneAndUpdate)
//   .delete(userController.findByIdAndDelete);

router.route("/accounts/balance").get(userController.getBalance);
router
  .route("/shopcard/transaction/:partnerRefId")
  .get(userController.getTransShopCard);
router.route("/shopcard/buy").post(userController.buyCard);
router.route("/topup/charging").post(userController.charging);
router
  .route("/topup/transaction/:partnerRefId")
  .get(userController.getTransCharging);

module.exports = router;
