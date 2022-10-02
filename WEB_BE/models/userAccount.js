const Sequelize = require("sequelize");

module.exports = class UserAccount extends Sequelize.Model {
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
          unique: "identifier_UNIQUE",
        },
        password: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
        createdtime: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        modifiedtime: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "UserAccount",
        tableName: "user_accounts",
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
