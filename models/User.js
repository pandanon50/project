import mongoose from "mongoose";
import localMongoose from "passport-local-mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  githubId: Number,
});

UserSchema.plugin(localMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
