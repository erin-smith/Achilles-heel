const router = require("express").Router();
const gameController = require("../../controllers/gameController");

// matches '/api/questions/
router.route("/")
  .post(gameController.createQuestion)
  .get(gameController.findQuestionsByTopic); // use ?topic=[topic_name]

module.exports = router;
