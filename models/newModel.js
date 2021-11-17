const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  content: String,
  type: String,
  //createdBy: { type: Schema.Types.ObjectId, ref: "users" },
});

const News = mongoose.model("News", newsSchema, "news");
module.exports = News;
