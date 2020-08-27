const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/achilles-heel"
);

const questionsSeed =  [{
    question: "How do you destroy the Golem ?",
    image: "https://pixabay.com/photos/rock-golem-mobile-online-game-4860877/",
    answerOptions: [{
        answerBody: "Bury it 20 feet deep",
        isCorrect: false
      },
      {
        answerBody: "Erase the letters on its head",
        isCorrect: false
      },
      {
        answerBody: "Do a magic spell",
        isCorrect: false
      },
      {
        answerBody: "Change the word EMET to MET on its forehead",
        isCorrect: true
      }
    ],
    category: "Monsters",
    points: 300,
    topic: "Myth_and_Legend"
  },
  {
    question: "How do you kill a Chimaera ?",
    image: "https://pixabay.com/vectors/chimera-creature-greece-greek-2027203/",
    answerOptions: [{
        answerBody: "Decapitation",
        isCorrect: false
      },
      {
        answerBody: "With a Sword",
        isCorrect: false
      },
      {
        answerBody: "Make its snake head bite its Lion head",
        isCorrect: false
      },
      {
        answerBody: "Feed it a block of lead",
        isCorrect: true
      }
    ],
    category: "Monsters",
    points: 600,
    topic: "Myth_and_Legend"
  },
  {
    question: "How do you vanquish a Sphinx?",
    image: "https://pixabay.com/vectors/animal-anthropomorphic-fictional-1300232/",
    answerOptions: [{
        answerBody: "Pour water on it",
        isCorrect: false
      },
      {
        answerBody: "Answer the riddle correctly",
        isCorrect: true
      },
      {
        answerBody: "Cut off its tail",
        isCorrect: false
      },
      {
        answerBody: "Say the password",
        isCorrect: false
      }
    ],
    category: "Monsters",
    points: 300,
    topic: "Myth_and_Legend"
  },
  {
    question: "How do you quash a Basilisk without a mirror ?",
    image: "https://pixabay.com/vectors/basilisk-creatures-drawing-fantasy-1296543/",
    answerOptions: [{
        answerBody: "The crow of a Rooster",
        isCorrect: true
      },
      {
        answerBody: "Feed it spiders",
        isCorrect: false
      },
      {
        answerBody: "A poisoned arrow",
        isCorrect: false
      },
      {
        answerBody: "With another Basilisk",
        isCorrect: false
      }
    ],
    category: "Monsters",
    points: 600,
    topic: "Myth_and_Legend"
  },
  {
    question: "How do you destroy a Hydra ?",
    image: "https://printablefreecoloring.com/drawing/gods-and-goddesses/coloring-greek-mythology-109616.jpg",
    answerOptions: [{
        answerBody: "Cut off the correct head",
        isCorrect: false
      },
      {
        answerBody: "Drown it",
        isCorrect: false
      },
      {
        answerBody: "Cut of the heads and cauterize the necks",
        isCorrect: true
      },
      {
        answerBody: "Cut off its heads in the right order",
        isCorrect: false
      }
    ],
    category: "Monsters",
    points: 100,
    topic: "Myth_and_Legend"
  },
  {
    question: "How do you kill a Nemean Lion ?",
    image: "https://pixabay.com/photos/lion-statue-mythology-greece-2660858/",
    answerOptions: [{
        answerBody: "Decapitation",
        isCorrect: false
      },
      {
        answerBody: "With a Sword",
        isCorrect: false
      },
      {
        answerBody: "Bow and Arrow",
        isCorrect: false
      },
      {
        answerBody: "Strangle it with super strength",
        isCorrect: true
      }
    ],
    category: "Monsters",
    points: 600,
    topic: "Myth_and_Legend"
  },
  {
    question: "How do you exterminate Medusa ?",
    image: "https://pixabay.com/photos/medusa-sculpture-desert-head-4802219/",
    answerOptions: [{
        answerBody: "Use a mirror to decapitate her",
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
        answerBody: "With fire",
        isCorrect: false
      }
    ],
    category: "Monsters",
    points: 100,
    topic: "Myth_and_Legend"
  },
  {
    question: "How do you defeat Sirens ?",
    image: "https://pixabay.com/photos/woman-mermaid-fantasy-mythology-3789114/",
    answerOptions: [{
        answerBody: "Shoot with harpoon",
        isCorrect: false
      },
      {
        answerBody: "Strangle",
        isCorrect: false
      },
      {
        answerBody: "Pass by their song with plugged ears ",
        isCorrect: true
      },
      {
        answerBody: "Sing a song to them",
        isCorrect: false
      }
    ],
    category: "Monsters",
    points: 300,
    topic: "Myth_and_Legend"
  },
  {
    question: "What was Pandora's fatal flaw ?",
    image: "https://pixabay.com/photos/sculpture-pandora-chauncey-bradley-835617/",
    answerOptions: [{
        answerBody: "Curiosity",
        isCorrect: true
      },
      {
        answerBody: "Pride",
        isCorrect: false
      },
      {
        answerBody: "Vanity",
        isCorrect: false
      },
      {
        answerBody: "Wrath",
        isCorrect: false
      }
    ],
    category: "Monsters",
    points: 100,
    topic: "Myth_and_Legend"
  },
];


db.Achilles-heel.deleteMany({})
  .then(() => db.Achilles-heel.collection.insertMany(questionsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });