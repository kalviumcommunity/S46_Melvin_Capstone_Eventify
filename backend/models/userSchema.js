import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  interests: [{ type: String }],
  registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

const organizerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  college: { type: String, required: true },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});
const User = mongoose.model("users", studentSchema);
const Organizer = mongoose.model("organizers", organizerSchema);

module.exports = { User, Organizer };
