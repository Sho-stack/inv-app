const express = require("express");
const router = express.Router();
const { Category } = require("../models/index");

// GET /categories
router.get("/", async (req, res, next) => {
    const categories = await Category.findAll();
    res.send(categories);
});

module.exports = router;
