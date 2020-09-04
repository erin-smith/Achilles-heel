/* eslint-disable max-len */
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/achilles-heel"
);

const levelSeeds = [
  {
    name: "Flute Lessons",
    routeName: "pansflute",
    description: "Learn to play the ancient flute from the master Pan himself. Pan is the god of the wild, shepherds, and rustic music.",
    score_points: 1000,
    difficulty: 1,
    topic: "Myth",
    icon: {
      url: "https://i.imgur.com/l82DW3e.png",
      size: [40]
    },
    geometry: {
      type: "Point",
      coordinates: [37.4181632, 22.2967529]
    }
  },
  {
    name: "Mt. Olympus Majestic Match",
    routeName: "majesticmatch",
    description: "Mount Olympus is the home of the gods. How well do you know them? Match as many gods & goddesses as you can.",
    score_points: 3000,
    difficulty: 2,
    topic: "Gods",
    icon: {
      url: "https://i.imgur.com/dfud3mF.png",
      size: [50]
    },
    geometry: {
      type: "Point",
      coordinates: [40.3465441, 22.2802734]
    }
  },
  {
    name: "Hades' Gate",
    routeName: "hadesgate",
    description: "Hades' Gate is the entrance to the Underworld. Kill all Hades' monsters to save your soul. Enter at your own risk.",
    score_points: 5000,
    difficulty: 3,
    topic: "Underworld",
    icon: {
      url: "https://i.imgur.com/HXi2wTy.png?1",
      size: [60]
    },
    geometry: {
      type: "Point",
      coordinates: [37.8921955, 28.3337402]
    }
  }
];

const worldSeeds = [{
  name: "Greece",
  mapStyle: "ckemcpovb0ji919nvjtuxg9qz",
  mapToken: "pk.eyJ1IjoiYWxleGFzdGVmIiwiYSI6ImNrZWx5MGdtYTAwYTMyeG0wZjE3MzU5cm0ifQ.RXcqX1-NpZY1TrAMzmoUxA",
  mapBounds: [[41.967659, 28.290531], [34.813803, 18.748031]],
  mapCenter: [40.702659, 27.030628],
  mapNames: [
    {
      url: "https://i.imgur.com/HEsnv7r.png",
      size: [140],
      position: [38.5137882595116, 23.5201657392248]
    }
  ],
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
