const User = require("../models/userModel");

exports.addUser = async (req, res, next) => {
  try {
    console.log(req.body);
    User.create(req.body);
    res.status(200).json({
      status: "success",
      code: 000,
    });
  } catch (error) {
    next(error);
  }
};
exports.findAll = async (req, res, next) => {
  try {
    console.log(User.find());
    res.status(200).json({
      status: "success",
      code: 000,
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
