import Organizer from "../models/organizerSchema.js";
import Event from "../models/eventSchema.js";

// Create a new organizer
export const createOrganizer = async (req, res) => {
  try {
    const newOrganizer = new Organizer(req.body);
    await newOrganizer.save();
    res.status(201).json({ message: "Organizer created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get organizer details
export const getOrganizerProfile = async (req, res) => {
  try {
    const organizer = await Organizer.findById(req.organizer._id);
    res.status(200).json(organizer);
  } catch (err) {
    res.status(404).json({ error: "Organizer not found" });
  }
};

// Update organizer profile
export const updateOrganizerProfile = async (req, res) => {
  try {
    const updatedOrganizer = await Organizer.findByIdAndUpdate(
      req.organizer._id,
      req.body,
      { new: true }
    );
    if (!updatedOrganizer) {
      return res.status(404).json({ error: "Organizer not found" });
    }

    res.status(200).json(updatedOrganizer);
    res.status(200).json(updatedOrganizer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete organizer account
export const deleteOrganizer = async (req, res) => {
  try {
    await Organizer.findByIdAndDelete(req.organizer._id);
    res.status(200).json({ message: "Organizer deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Create a new event
export const createEvent = async (req, res) => {
  try {
    const newEvent = new Event({ ...req.body, organizerId: req.organizer._id });
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all events by organizer
export const getOrganizerEvents = async (req, res) => {
  try {
    const events = await Event.find({ organizerId: req.organizer._id });
    res.status(200).json(events);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an event
export const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: req.params.eventId, organizerId: req.organizer._id },
      req.body,
      { new: true }
    );

    if (!updatedEvent) {
      return res
        .status(404)
        .json({
          error:
            "Event not found or you are not authorized to update this event",
        });
    }

    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findOneAndDelete({
      _id: req.params.eventId,
      organizerId: req.organizer._id,
    });

    if (!deletedEvent) {
      return res.status(404).json({
        error: "Event not found or you are not authorized to delete this event",
      });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
