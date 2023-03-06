const express = require("express");
const router = express.Router();
const { User } = require("../models/index");

// GET /users
router.get("/", async (req, res, next) => {
    const users = await User.findAll();
    res.send(users);
});

// GET /users/:userId
router.get("/:userId", async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    res.send(user);
});

module.exports = router;
