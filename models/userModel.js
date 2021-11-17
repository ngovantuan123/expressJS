const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, default: null },
  age: { type: Number, default: null },
  //news: [{ type: Schema.Types.ObjectId, ref: "news", autopopulate: true }],
});

const User = mongoose.model("User", userSchema, "users");
module.exports = User;
