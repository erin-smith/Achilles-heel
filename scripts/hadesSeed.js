const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/achilles-heel"
);

const hadesSeed = [{
  question: "What three-headed monster guards the gate to the Underworld ?",
  answerOptions: [{
    answerBody: "Medusa, a Gorgon with snakes for hair that turns people to stone",
    isCorrect: false
  },
  {
    answerBody: "Sphinx, a creature that kills those who answer her riddles incorrectly",
    isCorrect: false
  },
  {
    answerBody: "A fierce Nemean Lion, with impenetrable skin",
    isCorrect: false
  },
  {
    answerBody: "Cerberus, a dog with a snake for tail and snakes protruding",
    isCorrect: true
  }
  ],
  category: "Underworld",
  points: 100,
  topic: "Underworld"
},
{
  question: "What creature does not live near the entrance to the Underworld?",
  answerOptions: [{
    answerBody: "Pegasus",
    isCorrect: true
  },
  {
    answerBody: "Chimaera",
    isCorrect: false
  },
  {
    answerBody: "Gorgons",
    isCorrect: false
  },
  {
    answerBody: "Scylla",
    isCorrect: false
  }
  ],
  category: "Underworld",
  points: 300,
  topic: "Underworld"
},
{
  question: "Which monster(s) worked with dead souls to avenge crimes against the natural world order?",
  answerOptions: [{
    answerBody: "Centaurs",
    isCorrect: false
  },
  {
    answerBody: "Erinyes, the Furies",
    isCorrect: true
  },
  {
    answerBody: "Cyclops",
    isCorrect: false
  },
  {
    answerBody: "Minotaur",
    isCorrect: false
  }
  ],
  category: "Underworld",
  points: 600,
  topic: "Underworld"
},
{
  question: "Monsters Scylla and Charybdis are a metaphor for which idiom?",
  answerOptions: [{
    answerBody: "Get something out of your system",
    isCorrect: false
  },
  {
    answerBody: "Caught between a rock and a hard place",
    isCorrect: true
  },
  {
    answerBody: "Your guess is as good as mine",
    isCorrect: false
  },
  {
    answerBody: "Beat around the bush",
    isCorrect: false
  }
  ],
  category: "Underworld",
  points: 900,
  topic: "Underworld"
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
  topic: "Underworld"
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
  topic: "Underworld"
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
  topic: "Underworld"
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
  topic: "Underworld"
},
{
  question: "What is the Greek Chimaera made up of?",
  answerOptions: [{
    answerBody: "A lion, a tiger, and a snake",
    isCorrect: false
  },
  {
    answerBody: "A goat, a snake, and a lion",
    isCorrect: true
  },
  {
    answerBody: "A dragon, a woman, and a snake",
    isCorrect: false
  },
  {
    answerBody: "A lion, a woman, and a fish tail",
    isCorrect: false
  }
  ],
  category: "Chimaera",
  points: 100,
  topic: "Underworld"
},
{
  question: "What comes out of the Chimaera's mouth?",
  answerOptions: [{
    answerBody: "Fire",
    isCorrect: true
  },
  {
    answerBody: "Acid",
    isCorrect: false
  },
  {
    answerBody: "Venom",
    isCorrect: false
  },
  {
    answerBody: "Lightning",
    isCorrect: false
  }
  ],
  category: "Chimaera",
  points: 300,
  topic: "Underworld"
},

{
  question: "The Chimaera, at the entrance to the Underworld, can be slain how?",
  answerOptions: [{
    answerBody: "Feed it poisonous herbs",
    isCorrect: false
  },
  {
    answerBody: "Stab with a sharp bronze sword",
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
  category: "Chimaera",
  points: 600,
  topic: "Underworld"
},
{
  question: "Who killed the Chimaera in Greek Myth",
  answerOptions: [{
    answerBody: "Cerberus ate the Chimaera",
    isCorrect: false
  },
  {
    answerBody: "Hercules strangled it",
    isCorrect: false
  },
  {
    answerBody: "Perseus, with a mirrored shield",
    isCorrect: false
  },
  {
    answerBody: "Bellerophon, atop Pegasus",
    isCorrect: true
  }
  ],
  category: "Chimaera",
  points: 900,
  topic: "Underworld"
},
];

db.Questions.deleteMany({})
  .then(() => db.Questions.collection.insertMany(hadesSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
