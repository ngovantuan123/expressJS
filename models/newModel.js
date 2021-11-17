const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema({
    content:String,
    type:String,
    createdBy:  { type: Schema.Types.ObjectId, ref: "Users" }
});

newsSchema.plugin(require("mongoose-autopopulate"));
const News = mongoose.model("News", newsSchema);
module.exports = News;