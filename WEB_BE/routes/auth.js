const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./loginStatus");
const { userAccount: ua, userInfo: ui } = require("../models");

const router = express.Router();

/*
const passportConfig = require("../passport");
passportConfig();
router.use(passport.initialize());
router.use(passport.session());
*/

router.post("/register", isNotLoggedIn, async (req, res, next) => {
	const {
		identifier,
		password,
		category,
		name,
		phone,
		email,
		organization = null,
		address = null,
	} = req.body;

	try {
		const existence = await ua.findOne({ where: { identifier } });
		if (existence) {
			return res.redirect("/register?error=alreayexist");
		}
		const hash = await bcrypt.hash(password, 12);
		await ua
			.create({
				identifier: identifier,
				password: hash,
			})
			.then((result) => {
				res.json(result);
			});
		await ui
			.create({
				identifier: identifier,
				category: category,
				name: name,
				phone: phone,
				email: email,
				organization: organization,
				address: address,
			})
			.then((result) => {
				res.json(result);
			});
	} catch (error) {
		console.error(error);
		return next(error);
	}
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
	console.log("here1");
	passport.authenticate(
		"local",
		{
			successRedirect: "/",
			failureRedirect: "/login"
		},
		(authError, user, info) => {
			console.log("here2");
			if (authError) {
				console.error(authError);
				return next(authError);
			}
			if (!user) {
				return res.redirect(`/?loginError=${info.message}`);
			}
			return req.login(user, (loginError) => {
				if (loginError) {
					console.error(loginError);
					return next(loginError);
				}
				return res.redirect("/");
			})(req, res, next);
		}
	);
});

router.get("/logout", isLoggedIn, (req, res) => {
	res.logout();
	res.session.destroy();
	res.redirect("/");
});

module.exports = router;
