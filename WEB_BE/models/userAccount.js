const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userAccount', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    identifier: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "identifier_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    createdtime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modifiedtime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'user_accounts',
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
