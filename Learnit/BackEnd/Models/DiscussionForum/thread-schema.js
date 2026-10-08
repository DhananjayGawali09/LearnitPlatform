

const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema({
  authorType: {
    type: String,
    enum: ["Learner", "Instructor"],
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "authorType",
  },
  authorName: {
    type: String,
    required: true,
  },
  
  question: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reply",
    },
  ],
});

module.exports = mongoose.model("Thread", threadSchema);