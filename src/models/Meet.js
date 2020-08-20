import mongoose from "mongoose";

const MeetSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
  },
  title: {
    type: String,
    required: "Title is Required",
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Meet", MeetSchema);

export default model;
