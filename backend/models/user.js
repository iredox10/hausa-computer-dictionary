import mongoose from "mongoose";
const user = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      // select: false
    },
    favorite: Array,
    history: Array
    },{timestamps: true});

const User = mongoose.model("User", user);



export default User;
