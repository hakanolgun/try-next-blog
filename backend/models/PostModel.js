const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const PostSchema = new Schema({
  title: String,
  description: String,
  content: String,
  dateCreated: {
    type: String,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});

PostSchema.pre("validate", function (next) {
  this.slug = slugify(this.title, {
    lower: true,
    strict: true,
  });
  next();
});

// module.exports = mongoose.model("PostModel", PostSchema);

export default mongoose.models && mongoose.models.PostModel
  ? mongoose.models.PostModel
  : mongoose.model("PostModel", PostSchema);

