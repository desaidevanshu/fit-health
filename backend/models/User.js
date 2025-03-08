const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  mobileNumber: { type: String, required: true, unique: true },
  ageGroup: { type: String, enum: ["5-17", "18-24", "35+"], required: true },
});

module.exports = mongoose.model("User", UserSchema);
