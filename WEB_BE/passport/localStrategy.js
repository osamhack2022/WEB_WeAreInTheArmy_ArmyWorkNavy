const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const { userAccount: ua } = require("../models");

module.exports = () => {
	console.log("!!!");
	passport.use(
		new LocalStrategy(
			{
				usernameField: "identifier",
				passwordField: "password",
			},
			async (identifier, password, done) => {
				console.log("here1");
				try {
					console.log("here");
					const existence = await ua.findOne({
						where: { identifier }
					});
					if (existence) {
						const result = await bcrypt.compare(
							password,
							existence.password
						);
						if (result) {
							done(null, existence);
						} else {
							done(null, false, { message: "Incorrect PW" });
						}
					} else {
						done(null, false, { message: "Unexistent user" });
					}
				} catch (error) {
					console.error(error);
					done(error);
				}
			}
		)
	);
};
