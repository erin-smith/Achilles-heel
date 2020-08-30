/* eslint-disable max-len */
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
    topic: "Myth",
    icon: "https://i.imgur.com/xLBbq4z.png"
  },
  {
    name: "Den of Hades",
    score_points: 5000,
    difficulty: 2,
    topic: "Underworld",
    icon: "https://i.imgur.com/0sjDcfB.png"
  }
];

const worldSeeds = [{
  name: "Greece",
  background_image: "https://i.imgur.com/kuObrGZ.png",
  levels: []
}];

db.Level.deleteMany({})
  .then(() => db.Level.collection.insertMany(levelSeeds))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    const { insertedIds } = data;
    return insertedIds;
  })
  .then((insertedIds) => {
    const levelIds = Object.values(insertedIds).map((insertedId) => mongoose.Types.ObjectId(insertedId));
    worldSeeds[0].levels = levelIds;
    db.World.collection.insertMany(worldSeeds);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
