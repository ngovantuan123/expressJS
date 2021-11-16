const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);
module.exports = User;
