const db = require("../models");

module.exports = {
  createUser: function (req, res) {
    console.log(req.body);
    db.User.create(req.body).then(dbUser => res.json(dbUser)).catch(err => res.status(422).json(err));
  },
  findUserByEmail: function (req, res) {
    console.log(req.params.email);
    db.User.find({ email: req.params.email}).then(dbUser => res.json(dbUser)).catch(err => res.status(422).json(err));
  },
  findUserByDisplayName: function (req,res) {
    db.User.find({ display_name: req.params.display_name}).then(dbUser => res.json(dbUser)).catch(err => res.status(422).json(err));
  },
  updateUserByDisplayName: function (req,res) {
    db.User.findOneAndUpdate({display_name: req.params.display_name}, req.body).then(dbUser => res.json(dbUser)).catch(err => res.status(422).json(err));
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
