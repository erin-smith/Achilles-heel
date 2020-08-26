const router = require("express").Router();
const gameController = require("../../controllers/gameController");

// matches with '/api/world?name=[world_name]
router.route("/")
  .get(gameController.findOverworld)
  .post(gameController.createOverworld);

module.exports = router