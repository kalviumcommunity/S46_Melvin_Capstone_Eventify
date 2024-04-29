import Organizer from "../models/organizerSchema.js";
import Event from "../models/eventSchema.js";

// Get organizer details
export const getOrganizerProfile = async (req, res) => {
  try {
    const organizer = await Organizer.findById(req.organizer._id);
    res.status(200).json(organizer);
  } catch (err) {
    res.status(404).json({ error: "Organizer not found" });
  }
};

// Get all events by organizer
export const getOrganizerEvents = async (req, res) => {
  try {
    const events = await Event.find({ organizerId: req.organizer._id });
    res.status(200).json(events);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
