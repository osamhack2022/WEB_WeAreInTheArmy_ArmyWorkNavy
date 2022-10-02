var DataTypes = require("sequelize").DataTypes;
var _clientRequest = require("./clientRequest");
var _userAccount = require("./userAccount");
var _userInfo = require("./userInfo");

function initModels(sequelize) {
  var clientRequest = _clientRequest(sequelize, DataTypes);
  var userAccount = _userAccount(sequelize, DataTypes);
  var userInfo = _userInfo(sequelize, DataTypes);

  clientRequest.belongsTo(userAccount, { as: "identifier_user_account", foreignKey: "identifier"});
  userAccount.hasMany(clientRequest, { as: "client_requests", foreignKey: "identifier"});
  userInfo.belongsTo(userAccount, { as: "identifier_user_account", foreignKey: "identifier"});
  userAccount.hasOne(userInfo, { as: "user_info", foreignKey: "identifier"});

  return {
    clientRequest,
    userAccount,
    userInfo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
