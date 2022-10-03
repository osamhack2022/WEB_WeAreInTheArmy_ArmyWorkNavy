const express = require("express");

const { isLoggedIn, isNotLoggedIn } = require("./loginStatus");

const router = express.Router();

router.get("/", (req, res, next) => {
	res.render("index", { title: "Express" });
	next();
});

router.get("/loggedin", isLoggedIn, (req, res, next) => {
	res.send("is Loggedin");
});

router.get("/notloggedin", isNotLoggedIn, (req, res, next) => {
	res.send("is not Loggedin");
});


module.exports = router;
