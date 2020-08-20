const router = require("express").Router();
const gameRoutes = require("./game");

// Book routes
router.use("/game", gameRoutes);

module.exports = router;
