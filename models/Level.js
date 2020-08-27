/* eslint-disable comma-dangle */
const mongoose = require("mongoose");

const { Schema } = mongoose;

const LevelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  score_points: {
    type: Number,
    required: true
  },
  difficulty: {
    type: Number
  },
  topic: {
    type: String,
    required: true
  },
  x_coordinate: {
    type: Number,
    required: true
  },
  y_coordinate: {
    type: Number,
    required: true
  }
});

const Level = mongoose.model("Level", LevelSchema);

module.exports = Level;
