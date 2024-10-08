import Organizer from "../models/organizerSchema.js";
import Event from "../models/eventSchema.js";
import bcrypt from "bcrypt";

// Create a new organizer
export const createOrganizer = async (req, res) => {
  try {  
    const existingOrganizer = await Organizer.findOne({ name: req.body.name });
    if (existingOrganizer) {
      return res.status(400).json({ message: "Organizer already exists" });
    }
    const emailExists = await Organizer.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const { confirmPassword, ...otherDetails } = req.body;
    const newOrganizer = new Organizer({
      ...otherDetails,
      password: hashedPassword,
    });

    // Save the organizer
    await newOrganizer.save();
    res.status(201).json({ message: "Organizer created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//login organiser
export const loginOrganizer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const organizer = await Organizer.findOne({ email });
    if (!organizer) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, organizer.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const organizerResponse = organizer.toObject();
    delete organizerResponse.password;

    res.status(200).json({ message: "Login successful", organizer: organizerResponse});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all organizers
export const getAllOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.status(200).json(organizers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get organizer details
export const getOrganizerProfile = async (req, res) => {
  try {
    const organizer = await Organizer.findById(req.params.organizerId);
    if (!organizer) {
      return res.status(404).json({ message: "Organizer not found" });
    }
    res.status(200).json(organizer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update organizer profile
export const updateOrganizerProfile = async (req, res) => {
  try {
    const updatedOrganizer = await Organizer.findByIdAndUpdate(
      req.params.organizerId,
      req.body,
      { new: true }
    );
    if (!updatedOrganizer) {
      return res.status(404).json({ message: "Organizer not found" });
    }

    res.status(200).json(updatedOrganizer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete organizer account
export const deleteOrganizer = async (req, res) => {
  try {
    await Organizer.findByIdAndDelete(req.params.organizerId);
    res.status(200).json({ message: "Organizer deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Create a new event
export const createEvent = async (req, res) => {
  try {
    const newEvent = new Event({
      ...req.body,
      organizerId: req.params.organizerId,
    });
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all events by organizer
export const getOrganizerEvents = async (req, res) => {
  try {
    const events = await Event.find({ organizerId: req.params.organizerId });
    res.status(200).json(events);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an event
export const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: req.params.eventId, organizerId: req.params.organizerId },
      req.body,
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({
        message: "Event not found or you are not authorized to update this event",
      });
    }
    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findOneAndDelete({
      _id: req.params.eventId,
      organizerId: req.params.organizerId,
    });
    if (!deletedEvent) {
      return res.status(404).json({
        message: "Event not found or you are not authorized to delete this event",
      });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
