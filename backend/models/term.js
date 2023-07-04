import mongoose from "mongoose"

const term = new mongoose.Schema(
  {
    term: {
      type: String,
      required: true,
      unique: true,
    },
    termInHausa: {
      type: String,
      required: true,
      unique: true,
    },
    explanations: {
      type: [String],
      required: true,
    },
    example: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Term = mongoose.model("term", term)

export default Term
