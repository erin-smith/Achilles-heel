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
    topic: "Myth"
  },
  {
    question: "How do you kill a Chimaera ?",
    image: "https://www.pngkey.com/download/u2q8o0u2a9o0u2w7_chimera-transparent-chimera-png/",
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
    points: 900,
    topic: "Myth"
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
    points: 600,
    topic: "Myth"
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
    topic: "Myth"
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
    topic: "Myth"
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
    topic: "Myth"
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
    topic: "Myth"
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
    topic: "Myth"
  },
  {
    question: "How do you kill a Werewolf ?",
    image: "https://pixabay.com/illustrations/creature-3d-render-3d-render-4955806/",
    answerOptions: [{
        answerBody: "Leave it in the Sun",
        isCorrect: false
      },
      {
        answerBody: "Shoot with a silver bullet",
        isCorrect: true
      },
      {
        answerBody: "Put garlic around its neck",
        isCorrect: false
      },
      {
        answerBody: "Use a Bow and Arrow",
        isCorrect: false
      }
    ],
    category: "Monsters",
    points: 100,
    topic: "Myth"
  },
  {
  question: "How can one destory a Wendigo?",
    image: "https://www.freepik.com/premium-vector/wendigo-sport-logo-illustration_8065985.htm#page=1&query=wendigo&position=0",
    answerOptions: [{
        answerBody: "Eat its arm",
        isCorrect: false
      },
      {
        answerBody: "Melt it with water",
        isCorrect: false
      },
      {
        answerBody: "Subdue and cut out its icy heart and melt that in fire",
        isCorrect: true
      },
      {
        answerBody: "Feed it another Wendigo",
        isCorrect: false
      }
    ],
    category: "Monsters",
    points: 900,
    topic: "Myth"
  },
  {
    question: "How was the Minotaur killed?",
    image: "https://pixabay.com/illustrations/minotaur-sword-weapon-fantasy-horn-1950012/",
    answerOptions: [{
        answerBody: "Pushed into the river Styx",
        isCorrect: false
      },
      {
        answerBody: "Exposed to chlorine gas",
        isCorrect: false
      },
      {
        answerBody: "Shot with a slingshot in the eye",
        isCorrect: false
      },
      {
        answerBody: "Made a trail with a skein of yarn and slain with Sword",
        isCorrect: true
      }
    ],
    category: "Monsters",
    points: 300,
    topic: "Myth"
  },
  {
    question: "How do you escape a Nuckelavee?",
    image: "https://favpng.com/png_view/monster-the-bards-tale-nuckelavee-legendary-creature-monster-centaur-png/PA5reTpU",
    answerOptions: [{
        answerBody: "Play the lyre",
        isCorrect: false
      },
      {
        answerBody: "Splash it with rain or fresh water",
        isCorrect: true
      },
      {
        answerBody: "Show it its reflection",
        isCorrect: false
      },
      {
        answerBody: "Hurl fire and brimstone at it",
        isCorrect: false
      }
    ],
    category: "Monsters",
    points: 900,
    topic: "Myth"
  },
];




db.Questions.deleteMany({})
  .then(() => db.Questions.collection.insertMany(questionsSeed))

  // .then(() => db.Achilles-heel.collection.insertMany(questionsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 
