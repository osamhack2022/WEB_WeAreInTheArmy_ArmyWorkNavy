const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const initModels = require("./init-models");

const {userAccount, userInfo, clientRequest} = initModels(sequelize);

db.userAccount = userAccount;
db.userInfo = userInfo;
db.clientRequest = clientRequest;

module.exports = db;