const router = require("express").Router();
//const gameRoutes = require("./game");
const userRoutes = require("./user");

// API routes
//router.use("/game", gameRoutes);
router.use("/user", userRoutes);

module.exports = router;
