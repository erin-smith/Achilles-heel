const router = require("express").Router();
const gameController = require("../../controllers/gameController");

// matches with '/api/user'
router.route("/")
  .get(gameController.findAll)
  .post(gameController.createUser);

// matches with '/api/user/:email'
router
  .route("/email/:email")
  .get(gameController.findUserByEmail);

// matches with '/api/user/:email'
router
  .route("/display_name/:display_name")
  .get(gameController.findUserByDisplayName)
  .put(gameController.updateUserByDisplayName);


// router.post("/api/user", (req,res) => {
//   console.log("in user post route");
//   const user = req.body;

//   gameController.User.create(user).then(dbUser => {
//     res.json(dbUser);
//   }).catch(err => {
//     res.json(err);
//   });
// });

// router.get("/api/user/:email", (req,res) => {
//   gameController.User.find({ "email": req.params.email}).then( dbUser => {
//     res.json(dbUser);
//   }).catch(err => {
//     res.json(err);
//   });
// })

// probs delete this
// router.route("/")
 
// router
//   .route("/:id")
  

module.exports = router;
