import mongoose from 'mongoose'
const category = new mongoose.Schema({
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
    // topics:Array,
  topics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
    }],
}, { timestamps: true });

const Category = mongoose.model('Category', category)

export default Category