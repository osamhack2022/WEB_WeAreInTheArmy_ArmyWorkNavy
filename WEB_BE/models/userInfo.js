const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userInfo', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    identifier: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'user_accounts',
        key: 'identifier'
      },
      unique: "user_id"
    },
    category: {
      type: "SET('민간인','군부대','관리자')",
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    organization: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_info',
    timestamps: false,
    timestamp: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
      {
        name: "identifier_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identifier" },
        ]
      },
    ]
  });
};
