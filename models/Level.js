const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LevelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    score_points: {
        type: Number,
        required: true
    },
    difficulty: {
        type: Number,
    },
    topic: {
        type: String,
        required: true
    },
    world: {
        type: Schema.Types.ObjectId,
        ref: "World"
    }
});

const Level = mongoose.model("Level", LevelSchema);

module.exports = Level;

