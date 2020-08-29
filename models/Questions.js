const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuestionsSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  answerOptions: [
    {
      answerBody: {
        type: String,
      },
      isCorrect: {
        type: Boolean,
        default: false
      }
    }
  ],
  category: {
    type: String
  },
  points: {
    type: Number
  },
  topic: {
    type: String,
    required: true
  }
});

const Questions = mongoose.model("Questions", QuestionsSchema);

module.exports = Questions;
