const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: {type: String},
  password: { type: String, required: true },
  resetToken: {
    type: String,
  },
  resetTokenExpiry: {
    type: Date,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
