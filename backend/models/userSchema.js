import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  interests: [{ type: String }],
  registeredEvents: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});


const User = model("users", studentSchema);

export default User;
