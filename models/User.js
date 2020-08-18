import mongoose from "mongoose";
import localMongoose from "passport-local-mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  githubId: Number,
  meets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "meets",
    },
  ],
});

UserSchema.plugin(localMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
