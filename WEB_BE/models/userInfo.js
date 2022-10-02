const Sequelize = require("sequelize");

module.exports = class UserInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        idx: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        identifier: {
          type: DataTypes.STRING(100),
          allowNull: false,
          references: {
            model: "user_accounts",
            key: "identifier",
          },
          unique: "user_id",
        },
        category: {
          type: "SET('민간인','군부대','관리자')",
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        organization: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        address: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "UserInfo",
        tableName: "user_info",
        paranoid: "false",
        charset: "utf8",
        collate: "utf8_general_ci",
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "idx" }],
          },
          {
            name: "identifier_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "identifier" }],
          },
        ],
      }
    );
  }
};