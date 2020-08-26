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

Questions.create({ 
    question: "How do you quash a Basilisk without a mirror?", 
    image: "http://www.unexplainedmysteries.net/images_/basilisk_red2.jpg", 
    answerOptions: [
        { answerBody: "The crow of a Rooster", isCorrect: true },
        { answerBody: "Feed it spiders", isCorrect: false },
        { answerBody: "A poisoned arrow", isCorrect: false },
        { answerBody: "With another Basilisk", isCorrect: false}
    ],
    category: "Monsters",
    points: 100,
    topic: "Myth & Legend" 
});

module.exports = Questions;