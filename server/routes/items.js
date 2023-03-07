const express = require("express");
const router = express.Router();
const { Item } = require("../models/index");

// GET /users
router.get("/", async (req, res, next) => {
    const items = await Item.findAll();
    res.send(items);
});

// GET /users/:userId
router.get("/:userId", async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    res.send(user);
});

module.exports = router;
