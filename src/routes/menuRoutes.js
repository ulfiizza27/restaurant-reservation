const express = require("express");
const menuController = require("../controllers/menuController");
const router = express.Router();

router.get("/menu", menuController.getAllMenuItems);
router.post("/createMenu", menuController.createMenuItem);
router.get("/menu/:category", menuController.getMenuByCategory);

module.exports = router;
