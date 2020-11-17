const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      minlength: true,
    },
    password: {
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

const UserDomain = mongoose.model("UserDomain", UserSchema);

module.exports = UserDomain;
