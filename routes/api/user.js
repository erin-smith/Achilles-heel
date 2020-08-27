const router = require("express").Router();
const gameController = require("../../controllers/gameController");

// matches with '/api/user?display_name=reptile18'
router.route("/")
  .get(gameController.findUser)
  .post(gameController.createUser)
  .put(gameController.updateUserByDisplayName);

module.exports = router;
