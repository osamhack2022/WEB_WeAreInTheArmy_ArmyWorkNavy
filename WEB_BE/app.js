/* import modules */
const express = require("express");
const morgan = require("morgan");
const { sequelize } = require("./models");

const dotenv = require("dotenv");
const passportConfig = require("passport");
const path = require("path");

dotenv.config();
passportConfig();

const router = require("./routes");

/* start express object */
const app = express();
sequelize.sync();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"), express.json(), express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    }
}));

app.use(passport.initialize());
app.use(passport.session());


app.use("/", router);

app.use((err, req, res, next) => {
    res.status(err.status||500).send("error");
})

app.listen(app.get("port"), () => {
    console.log("Server is runnign on PORT: ", app.get("port"))
})