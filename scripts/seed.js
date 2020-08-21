const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/OURNAMEHERE"
);

const gameSeed = [
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  }
];

db.Game
  .remove({})
  .then(() => db.Gane.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
