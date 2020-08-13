import mongoose from "mongoose";
const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is Required",
  },
  money: {
    type: Number,
    required: "Money is Required",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  detail: {
    type: String,
  },
  meet: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meet",
    },
  ],
});

const model = mongoose.model("Member", MemberSchema);

export default model;
