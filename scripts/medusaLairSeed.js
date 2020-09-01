const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/achilles-heel"
);

const medusaLairSeed = [{
  question: "What type of creature was Medusa by birth ?",
  answerOptions: [{
    answerBody: "Human",
    isCorrect: true
  },
  {
    answerBody: "Gorgon",
    isCorrect: false
  },
  {
    answerBody: "Goddess",
    isCorrect: false
  },
  {
    answerBody: "Serpent",
    isCorrect: false
  }
  ],
  category: "Medusa",
  points: 100,
  topic: "Myth"
},
{
  question: "Who killed Medusa in Myth?",
  answerOptions: [{
    answerBody: "Athena",
    isCorrect: false
  },
  {
    answerBody: "Poseidon",
    isCorrect: false
  },
  {
    answerBody: "Perseus",
    isCorrect: true
  },
  {
    answerBody: "Ovid",
    isCorrect: false
  }
  ],
  category: "Medusa",
  points: 300,
  topic: "Myth"
},
{
  question: "How do you kill Medusa ?",
  answerOptions: [{
    answerBody: "Use a mirrored shield and decapitate her",
    isCorrect: true
  },
  {
    answerBody: "Cut off each snake on her head",
    isCorrect: false
  },
  {
    answerBody: "Shoot an arrow through her heart",
    isCorrect: false
  },
  {
    answerBody: "With fire and brimstone",
    isCorrect: false
  }
  ],
  category: "Medusa",
  points: 600,
  topic: "Myth"
},
{
  question: "What 2 items spring from Medusa's body when she is killed ?",
  answerOptions: [{
    answerBody: "Snakes and stones",
    isCorrect: false
  },
  {
    answerBody: "Blood and Water",
    isCorrect: false
  },
  {
    answerBody: "Two Gorgons: Stheno and Euryale",
    isCorrect: false
  },
  {
    answerBody: "Pegasus and Chrysaor",
    isCorrect: true
  }
  ],
  category: "Medusa",
  points: 900,
  topic: "Myth"
},
{
  question: "How do you destroy a Lernaean Hydra ?",
  answerOptions: [{
    answerBody: "Shoot a poisoned arrow through its heart",
    isCorrect: false
  },
  {
    answerBody: "Drown it in a La Brea tar pit",
    isCorrect: false
  },
  {
    answerBody: "Cut off the heads and cauterize the neck stumps",
    isCorrect: true
  },
  {
    answerBody: "Cut off its heads in the correct sequential order",
    isCorrect: false
  }
  ],
  category: "Hydra",
  points: 100,
  topic: "Myth"
},
{
  question: "Who killed the Lernaean Hydra in Greek Mythology ?",
  answerOptions: [{
    answerBody: "Hades",
    isCorrect: false
  },
  {
    answerBody: "Hera",
    isCorrect: false
  },
  {
    answerBody: "Hesiod",
    isCorrect: false
  },
  {
    answerBody: "Hercules",
    isCorrect: true
  }
  ],
  category: "Hydra",
  points: 300,
  topic: "Myth"
},
{
  question: "The Hydra lives in the Underworld guarding what?",

  answerOptions: [{
    answerBody: "The souls of dead mortals",
    isCorrect: false
  },
  {
    answerBody: "The bottomless Alcyonian Lake",
    isCorrect: true
  },
  {
    answerBody: "A cavern near Tenarus",
    isCorrect: false
  },
  {
    answerBody: "The fountain of Youth",
    isCorrect: false
  }
  ],
  category: "Hydra",
  points: 600,
  topic: "Myth"
},
{
  question: "What is special about the Hydra's heads ?",
  answerOptions: [{
    answerBody: "There are exactly 3 heads",
    isCorrect: false
  },
  {
    answerBody: "They grow back, spit acid, and one is immortal",
    isCorrect: true
  },
  {
    answerBody: "They shoot out crabs and lobsters",
    isCorrect: false
  },
  {
    answerBody: "The heads change faces and colors",
    isCorrect: false
  }
  ],
  category: "Hydra",
  points: 900,
  topic: "Myth"
},
{
  question: "Who is the God of the Underworld?",
  answerOptions: [{
    answerBody: "Styx",
    isCorrect: false
  },
  {
    answerBody: "Zeus",
    isCorrect: false
  },
  {
    answerBody: "Hades",
    isCorrect: true
  },
  {
    answerBody: "Poseidon",
    isCorrect: false
  }
  ],
  category: "Underworld",
  points: 100,
  topic: "Myth"
},
{
  question: "The Greek Underworld has rivers and fields that symbolize what?",
  answerOptions: [{
    answerBody: "Purgatory",
    isCorrect: false
  },
  {
    answerBody: "Emotions assosicated with death/grief",
    isCorrect: true
  },
  {
    answerBody: "The 7 deadly sins",
    isCorrect: false
  },
  {
    answerBody: "Constellations",
    isCorrect: false
  }
  ],
  category: "Underworld",
  points: 300,
  topic: "Myth"
},

{
  question: "Who was abducted, and then married to Hades?",
  answerOptions: [{
    answerBody: "Persephone",
    isCorrect: true
  },
  {
    answerBody: "Demeter",
    isCorrect: false
  },
  {
    answerBody: "Athena",
    isCorrect: false
  },
  {
    answerBody: "Melinoe",
    isCorrect: false
  }
  ],
  category: "Underworld",
  points: 600,
  topic: "Myth"
},
{
  question: "The Chimera, at the entrance to the Underworld, can be slain how?",
  answerOptions: [{
    answerBody: "Feed it poisonous herbs",
    isCorrect: false
  },
  {
    answerBody: "Stab it with a sharp bronze sword",
    isCorrect: false
  },
  {
    answerBody: "Make its snake head bite its lion head",
    isCorrect: false
  },
  {
    answerBody: "Feed it a block of lead",
    isCorrect: true
  }
  ],
  category: "Underworld",
  points: 900,
  topic: "Myth"
},
];

db.Questions.deleteMany({})
  .then(() => db.Questions.collection.insertMany(medusaLairSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
