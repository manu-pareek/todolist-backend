const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    default: "none",
  },
  email: {
    type: String,
    default: "none",
    // required: true,
  },
  password: {
    type: String,
    default: "none",
    // required: true,
  },
  mob_no: {
    type: Number,
    default: 0,

    // required: true,
  },
  dob: {
    type: Date,
    default: null,

    // required: true,
  },
  type: {
    type: String,
    // required: true,
  },
  todo: {
    type: Array,
    default: [],
  },
  role: {
    type: String,
    default: "user",
  },
  id: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("User", userSchema);
