const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const BlogDomain = mongoose.model("BlogDomain", BlogSchema);

module.exports = BlogDomain;
