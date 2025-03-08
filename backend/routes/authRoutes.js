const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register or Login User
router.post("/auth", async (req, res) => {
  const { mobileNumber, ageGroup } = req.body;
  
  if (!mobileNumber || !ageGroup) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    let user = await User.findOne({ mobileNumber });

    if (!user) {
      user = new User({ mobileNumber, ageGroup });
      await user.save();
    }

    res.status(200).json({ message: "Success", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
