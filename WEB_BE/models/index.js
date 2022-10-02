const Sequelize = require("sequelize");
const UserAccounts = require("./userAccounts");
const UserInfo = require("./userInfo");
const ClientRequests = require("./clientRequest");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.UserAccounts = UserAccounts;
db.UserInfo = UserInfo;
db.ClientRequest = ClientRequests;

UserAccounts.init(sequelize);
UserInfo.init(sequelize);
ClientRequests.init(sequelize);

UserAccounts.associate(db);
UserInfo.associate(db);
ClientRequests.associate(db);

module.exports = db;