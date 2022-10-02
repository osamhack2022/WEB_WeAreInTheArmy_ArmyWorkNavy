/* import modules */
const express = require("express");
const path = require("path");
const morgan = require("morgan");

/* start sequelize object */
const { sequelize } = require("./models/index.js");
sequelize
    .sync({ force: true })
    .then(() => {
        console.log("Connected to database.");
    })
    .catch((err) => {
        console.error(err);
    });

/* start express object */
const app = express();
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"), express.json(), express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
    res.status(err.status||500).send("error");
})

app.listen(app.get("port"), () => {
    console.log("Server is runnign on PORT: ", app.get("port"))
})