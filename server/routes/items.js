const express = require("express");
const router = express.Router();
const { Item } = require("../models/index");

// GET /users
router.get("/", async (req, res, next) => {
    const items = await Item.findAll();
    res.send(items);
});



router.post("/", async (req, res) => {
    console.log('req.body:')
    console.log(req.body)
    const item = await Item.create(req.body);
    console.log(item)
    res.send(item);
});

router.delete("/:id", async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    await item.destroy();
    res.send(item);
});

router.put("/:id", async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    await item.update(req.body);
    res.send(item);
});




module.exports = router;
