const router = require("express").Router();
const gameController = require("../../controllers/gameController");

router.route("/")
  .get(gameController.getAllUsers);

module.exports = router;
