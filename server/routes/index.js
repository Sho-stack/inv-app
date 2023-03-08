const express = require("express");
const router = express.Router();

// different model routers
router.use('/users', require('./users'));
router.use('/items', require('./items'));
router.use('/categories', require('./categories'));
router.use('/orders', require('./orders'));

module.exports = router;
