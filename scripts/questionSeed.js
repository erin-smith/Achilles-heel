const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/achilles-heel"
);

const questionsSeed = [{
    question: "How do you destroy the Golem ?",
    image: "https://cdn.pixabay.com/photo/2020/02/18/23/01/rock-4860877_1280.jpg",
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
    image: "https://www.pngkey.com/png/full/155-1550665_chimera-transparent-chimera-png.png",
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
    image: "https://www.netclipart.com/pp/m/380-3804709_greek-mythology-sphinx-drawing.png",
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
    image: "https://cdn.pixabay.com/photo/2016/03/31/21/38/basilisk-1296543_1280.png",
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
    image: "https://cdn.pixabay.com/photo/2017/08/20/08/21/lion-2660858_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2020/01/29/11/17/medusa-4802219_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2018/11/01/21/40/woman-3789114_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2020/03/22/04/10/creature-4955806_1280.png",
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
    question: "How can one destroy a Wendigo?",
    image: "https://image.freepik.com/free-vector/wendigo-sport-logo-illustration_72076-362.jpg",
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
    image: "https://cdn.pixabay.com/photo/2017/01/03/17/11/minotaur-1950012_1280.png",
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
    image: "https://img.favpng.com/25/18/1/the-bard-s-tale-nuckelavee-legendary-creature-monster-centaur-png-favpng-MqU1zigUdxGGZRQVjPEA3JsXi.jpg",
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
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
