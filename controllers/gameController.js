const db = require("../models");

module.exports = {
  getAllUsers: (req, res) => {
    db.User.find({}).then((dbUsers) => res.json(dbUsers)).catch((err) => res.status(422).json(err));
  },
  createUser: (req, res) => {
    db.User.create(req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  findUser: (req, res) => {
    const { email } = req.query;
    const { display_name } = req.query;
    if (display_name) {
      db.User.find({ display_name })
        .then((dbUser) => res.json(dbUser))
        .catch((err) => res.status(422).json(err));
    } else {
      db.User.find({ email })
        .then((dbUser) => res.json(dbUser))
        .catch((err) => res.status(422).json(err));
    }
  },
  updateUserByDisplayName(req, res) {
    console.log("updating user", req.query.display_name);
    db.User.findOneAndUpdate({ display_name: req.query.display_name }, req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  createOverworld(req, res) {
    db.World.create(req.body)
      .then((dbWorld) => req.json(dbWorld))
      .catch((err) => res.status(422).json(err));
  },
  findOverworld(req, res) {
    db.World.find({ name: req.query.name }).populate("levels")
      .then((dbWorld) => res.json(dbWorld))
      .catch((err) => res.status(422).json(err));
  },
  createArena(req, res) {
    db.Level.create(req.body)
      .then((dbLevel) => res.json(dbLevel))
      .catch((err) => res.status(422).json(err));
  },
  findArenaById(req, res) {
    db.Level.findById(req.query.id)
      .then((dbLevel) => res.json(dbLevel))
      .catch((err) => res.status(422).json(err));
  },
  createQuestion(req, res) {
    db.Questions.create(req.body)
      .then((dbQuestion) => res.json(dbQuestion))
      .catch((err) => res.status(422).json(err));
  },
  findQuestionsByTopic(req, res) {
    db.Questions.find({ topic: req.query.topic })
      .then((dbQuestions) => res.json(dbQuestions))
      .catch((err) => res.status(422).json(err));
  }
};
