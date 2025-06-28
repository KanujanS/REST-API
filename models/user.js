import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Just stored as plain text for now (no auth logic needed)
});

export default mongoose.model('User', userSchema);