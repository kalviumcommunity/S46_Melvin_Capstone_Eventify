import mongoose from "mongoose";
const { Schema, model } = mongoose;

const organizerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  college: { type: String, required: true },
  events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});

const Organizer = model("organizers", organizerSchema);
export default Organizer;