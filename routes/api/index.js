const router = require("express").Router();
// const gameRoutes = require("./game");
const userRoutes = require("./user");
const questionsRoutes = require("./questions");
const worldRoutes = require("./world");
const levelRoutes = require("./level");
const usersRoutes = require("./users");

// API routes
// router.use("/game", gameRoutes);
router.use("/users", usersRoutes);
router.use("/user", userRoutes);
router.use("/questions", questionsRoutes);
router.use("/world", worldRoutes);
router.use("/level", levelRoutes);

module.exports = router;
