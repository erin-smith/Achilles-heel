const mongoose = require("mongoose");

const { Schema } = mongoose;

const LevelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true
  },
  description: {
    type: String
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
  icon: {
    url: String,
    size: [Number]
  },
  geometry: {
    type: {
      type: String,
    },
    coordinates: {
      type: [Number]
    }
  }
});

const Level = mongoose.model("Level", LevelSchema);

module.exports = Level;
