const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AAMSchema = new Schema(
  {
    origin: {
      type: String,
      required: true,
      trim: true,
      minlength: true,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
      minlength: true,
    },
  },
  {
    timestamps: false,
  }
);

const AAMDomain = mongoose.model("AAMDomain", AAMSchema);

module.exports = AAMDomain;
