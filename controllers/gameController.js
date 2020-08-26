const db = require("../models");

module.exports = {
  createUser: function (req, res) {
    db.User.create(req.body).then(dbUser => res.json(dbUser)).catch(err => res.status(422).json(err));
  },
  findUser: function (req, res) {
    const email = req.query.email;
    const display_name = req.query.display_name;
    if (display_name) {
      db.User.find({ display_name: display_name}).then(dbUser => res.json(dbUser)).catch(err => res.status(422).json(err));
    }
    else {
      db.User.find({ email: email}).then(dbUser => res.json(dbUser)).catch(err => res.status(422).json(err));
    }
  },
  updateUserByDisplayName: function (req,res) {
    console.log("updating user", req.query.display_name)
    db.User.findOneAndUpdate({display_name: req.query.display_name}, req.body).then(dbUser => res.json(dbUser)).catch(err => res.status(422).json(err));
  },
  createOverworld: function (req, res) {
    db.World.create(req.body).then(dbWorld => req.json(dbWorld)).catch(err => res.status(422).json(err));
  },
  findOverworld: function (req, res) {
    db.World.find({name: req.query.name}).then(dbWorld => res.json(dbWorld)).catch(err => res.status(422).json(err));
  },
  createArena: function (req, res) {
    db.Level.create(req.body).then(dbLevel => res.json(dbLevel)).catch(err => res.status(422).json(err));
  },
  findArenaById: function (req, res) {
    db.Level.findById(req.query.id).then(dbLevel => res.json(dbLevel)).catch(err => res.status(422).json(err));
  },
  createQuestion: function (req, res) {
    db.Questions.create(req.body).then(dbQuestion => res.json(dbQuestion)).catch(err => res.status(422).json(err));
  },
  findQuestionsByTopic: function (req, res) {
    db.Questions.find({topic: req.query.topic}).then(dbQuestions => res.json(dbQuestions)).catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
   
  },
  findById: function(req, res) {
    
  },
  create: function(req, res) {
    
  },
  update: function(req, res) {
   
  },
  remove: function(req, res) {
    
  }
};
