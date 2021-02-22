const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const PostContentSchema = new Schema({
  title: String,
  partner: String,
  deliveryType: String,
  creativeFormat: String,
  platform: String,
  files: Array,
  creativeSizes: Array,
  dynamicElement: Object,
  date: {
    type: String,
    default: Date.now(),
  },
});

// Model
const PostContent = mongoose.model("PostContent", PostContentSchema);

module.exports = PostContent;
