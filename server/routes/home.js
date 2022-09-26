const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

router.get("/", (req, res) => {
	res.send("Welcome to MELI server");
});

module.exports = router;
