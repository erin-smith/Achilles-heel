const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    answers: [
        {
            test: String
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