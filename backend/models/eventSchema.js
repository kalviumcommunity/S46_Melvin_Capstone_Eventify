import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  organizerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organizer",
    required: true,
  },
  registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  image: { type: String, required: true },
  website: { type: String },
  socialMediaLinks: [{ type: String }],
});

const Event = mongoose.model("events", eventSchema);
export default Event;
