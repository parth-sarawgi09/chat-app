import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      // full name of the user
      type: String,
      required: true,
    },
    email: {
      // email of the user
      type: String,
      required: true,
      unique: true,
    },
    password: {
      // password of the user
      type: String,
      required: true,
      minimumLength: 8,
    },
    bio: {
      // short bio of the user
      type: String,
      default: "",
    },
    profilePic: {
      // to store profile picture as binary data
      type: String,
      default: "",
    },
    nativeLanguage: {
      // native language of the user
      type: String,
      default: "",
    },
    learningLanguage: {
      // language the user is learning
      type: String,
      default: "",
    },
    location: {
      // location of the user
      type: String,
      default: "",
    },
    isOnboarded: {
      // to check if the user has completed onboarding
      type: Boolean,
      default: false,
    },

    friends: [
        // list of friends (other users)
      {
        typeof: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
); // timestamps will create createdAt and updatedAt fields automatically


const User = mongoose.model("User", userSchema);
export default User;
