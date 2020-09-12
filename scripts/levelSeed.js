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
    description: "Learn the ancient flute from Pan himself! Pan is the god of shepherds, the Wild, and rustic music. Can you replicate his dulcet tune? ",
    score_points: 1000,
    difficulty: 1,
    topic: "Myth",
    iconUrl: "https://i.imgur.com/ZDmhRZ4.png",
    iconSize: [40],
    geometry: {
      type: "Point",
      coordinates: [38.418163, 22.296752]
    }
  },
  {
    name: "Hades' Gate",
    routeName: "hadesgate",
    description: "Hades' Gate opens the Underworld. Decimate all of Hades' monsters to save your soul. Answer at your own risk.",
    score_points: 5000,
    difficulty: 3,
    topic: "Underworld",
    iconUrl: "https://i.imgur.com/7gvnK8a.png",
    iconSize: [100],
    geometry: {
      type: "Point",
      coordinates: [38.8921955, 28.3337402]
    }
  },
  {
    name: "Mount Olympus",
    routeName: "olympus",
    description: "Mt. Olympus is the home of the gods. Make as many majestic matches as you can. Match each God or Goddess to their Symbol!",
    score_points: 3000,
    difficulty: 2,
    topic: "Gods",
    iconUrl: "https://i.imgur.com/dfud3mF.png",
    iconSize: [65],
    geometry: {
      type: "Point",
      coordinates: [41.3465441, 22.2802734]
    }
  }
];

const worldSeeds = [{
  name: "Greece",
  mapStyle: "ckemcpovb0ji919nvjtuxg9qz",
  mapToken: "pk.eyJ1IjoiYWxleGFzdGVmIiwiYSI6ImNrZWx5MGdtYTAwYTMyeG0wZjE3MzU5cm0ifQ.RXcqX1-NpZY1TrAMzmoUxA",
  mapBounds: [[41.967659, 32.290531], [34.813803, 18.748031]],
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
