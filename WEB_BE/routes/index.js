const express = require("express");
const router = express.Router();

const {isLoggedIn, isNotLoggedIn } = require("./loginStatus");

router.get("/", function(req, res, next) {
    res.render("index", {title: "Express"});
    next();
});

router.get("/loggedin", isLoggedIn, (req, res) => {
    res.send("is Loggedin");

})

router.get("/notloggedin", isNotLoggedIn, (req, res) => {
    res.send("is not Loggedin");
})

router.use("/userAccount", require("./uaSQL"));

module.exports = router;