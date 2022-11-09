const express = require("express");
const router = new express.Router(); //instatiate express router
const shopController = require ("../Controllers/shopController")

router.get("/", shopController.getShops);
router.post("/add", shopController.createShop);
router.patch("/shop/:id", shopController.updateShops)

module.exports = router;
