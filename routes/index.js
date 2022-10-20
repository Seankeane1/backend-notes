const express = require("express");
const router = new express.Router(); //instatiate express router
const shopController = require ("../Controllers/shopController")

router.get("/", shopController.middlewareSample, shopController.homepage);
router.get("/auth", shopController.middlewareSample, shopController.authPage)

module.exports = router;
