import mongoose from "mongoose";
const topic = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
      unique: true,
    },
    // words: Array,
    // terms: Array
    words: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Word'
    }],
    terms: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Term'
    }],
  },
  { timestamps: true }
);

const Topic = mongoose.model("Topic", topic);

export default Topic;
