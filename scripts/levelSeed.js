const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/achilles-heel"
);

const levelSeeds = [
  {
    name: "Medusa's Lair",
    score_points: 1000,
    difficulty: 1,
    topic: "Myth_and_Legend"

  },
  {
    name: "Den of Hades",
    score_points: 5000,
    difficulty: 2,
    topic: "Myth_and_Legend"

  }
];

db.Level.deleteMany({})
  .then(() => db.Level.collection.insertMany(levelSeeds))

  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
