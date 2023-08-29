const controller = require("../controller/shoppingController");

const router = require("express").Router();

router.post("/product", controller.createItem);

router.get("/product", controller.getAllItems);

module.exports = router;

