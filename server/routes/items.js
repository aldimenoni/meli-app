const express = require("express");
const {
	getItemsByParams,
	getItemById,
	getItemDescription,
} = require("../controllers/items");
const router = express.Router();

router.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

router.get("/items", (req, res) => getItemsByParams(req, res));
router.get("/items/:id", (req, res) => getItemById(req, res));
router.get("/items/:id/description", (req, res) =>
	getItemDescription(req, res)
);

module.exports = router;
