const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/achilles-heel"
);

const worldSeeds = [
	{
		name: "Greece",
		background_image: "https://i.imgur.com/kuObrGZ.png",
		// levels:
	},
];

db.World.deleteMany({})
	.then(() => db.World.collection.insertMany(worldSeeds))

// .then(() => db.Achilles-heel.collection.insertMany(questionsSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

