import mongoose, { mongo } from "mongoose";

const word = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
      unique: true,
    },
    wordInHausa: {
      type: String,
      required: true,
      unique: true,
    },
    explanations: {
      type:[String],
      required: true,
    },
    grammar: {
      type: String,
      required: true,
    },
    example: {
      type: String,
    },
  },
  { timestamps: true }
);

const Word = mongoose.model("Word", word);

export default Word;
