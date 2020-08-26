const router = require("express").Router();
const gameController = require("../../controllers/gameController");

router.route("/")
  .get(gameController.findArenaById)
  .post(gameController.createArena);

module.exports = router