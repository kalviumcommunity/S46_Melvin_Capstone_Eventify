import User from '../models/userSchema.js';
import Event from '../models/eventSchema.js';

// Create a new user
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get user details
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
};

// Delete user account
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Register for an event
export const registerForEvent = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const event = await Event.findById(req.params.eventId);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    user.registeredEvents.push(event._id);
    await user.save();

    res.status(200).json({ message: 'Registered for the event successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Bookmark an event
export const bookmarkEvent = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const event = await Event.findById(req.params.eventId);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    user.bookmarks.push(event._id);
    await user.save();

    res.status(200).json({ message: 'Event bookmarked successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};