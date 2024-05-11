import User from "../models/userSchema.js";
import Event from "../models/eventSchema.js";
import bcrypt, { hash } from "bcrypt";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ name: req.body.username });
    if (existingUser) {
      return res.status(409).json({ error: "Username already taken" });
    }
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(409).json({ message: "Email already taken" });
    }
    hashPassword = await bcrypt.hash(req.body.password, 11);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ error: "No users found" });
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get user details
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete user account
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Register for an event
export const registerForEvent = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const event = await Event.findById(req.params.eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    user.registeredEvents.push(event._id);
    await user.save();

    res.status(200).json({ message: "Registered for the event successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Bookmark an event
export const bookmarkEvent = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const event = await Event.findById(req.params.eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    user.bookmarks.push(event._id);
    await user.save();

    res.status(200).json({ message: "Event bookmarked successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
