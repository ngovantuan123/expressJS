const User = require("../models/userModel");
const News = require("../models/newModel");
const { response } = require("express");

exports.addUser = async (req, res, next) => {
  try {
    console.log(req.body);
    User.create(req.body)
      .then(() => {
        res.status(200).json({
          status: "insert success",
          code: "000",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          status: "fail",
          message: err.stack,
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fails", data: error.stack });
  }
};
exports.findAll = async (req, res, next) => {
  try {
    User.find()
      .exec()
      .then((docs) => {
        console.log(docs);
        res.status(200).json({
          code: "000",
          desc: "SUCCESS",
          result: docs.length,
          data: docs,
        });
      })
      .catch((err) => {
        console.log(error);
        res.status(500).json({ status: "fails", data: error.stack });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fails", data: error.stack });
  }
};

exports.findById = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    console.log("====== find user by id: " + userId);
    const u = await User.findById(userId);
    if (u == null) {
      console.log("not found");
      res.status(404).json({
        status: "fail",
        message: "resource not found",
      });
    } else {
      console.log(u);
      res.status(200).json({
        desc: "SUCCCESS",
        code: "000",
        data: u,
      });
    }
  } catch (error) {
    console.log(error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        status: "fail",
        message: "resource not found",
      });
    }
    res.status(500).json({ status: "fails", data: error.stack });
  }
};

exports.findOneAndUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("=======> update user id :" + id);
    console.log(req.body);
    if (id == null) {
      return res.status(400).json({
        code: "100",
        message: "INVALID_DATA",
      });
    }
    User.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      },
      (err, model) => {
        if (!err && model != null) {
          console.log("<======= update user id :" + id + " success");
          console.log(model);
          res.status(200).json({
            code: "000",
            message: "update success",
            data: model,
          });
        } else {
          res.status(400).json({
            code: "100",
            message: "INVALID_DATA",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fails", data: error.stack });
  }
};

exports.findByIdAndDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("=======> delete user id :" + id);
    if (id == null) {
      return res.status(400).json({
        code: "100",
        message: "INVALID_DATA",
      });
    }
    User.findByIdAndDelete(id, (err, model) => {
      console.log(model);
      if (!err && model != null) {
        console.log("<======= delete user id :" + id + " success");
        console.log(model);
        res.status(200).json({
          code: "000",
          message: "delete success",
        });
      } else {
        res.status(400).json({
          code: "100",
          message: "INVALID_DATA",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fails", data: error.stack });
  }
};
