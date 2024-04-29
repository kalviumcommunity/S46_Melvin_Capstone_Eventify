import User from "../models/userSchema.js";

// Get user details
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
};
