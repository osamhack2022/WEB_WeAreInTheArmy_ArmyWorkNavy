const passport = require("passport");
const local = require("./localStrategy");
// const kakao = require("./kakaoStrategy");
const { userAccount: ua } = require("../models");

module.exports = () => {
	passport.serializeUser((user, done) => {
		done(null, user.identifier);
	});

	passport.deserializeUser((identifier, done) => {
		ua.findOne({ where: { identifier } })
			.then((user) => done(null, user))
			.catch((err) => done(err));
	});

	local();
	// kakao();
};
