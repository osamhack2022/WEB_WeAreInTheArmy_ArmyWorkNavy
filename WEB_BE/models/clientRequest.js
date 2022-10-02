const Sequelize = require("sequelize");

module.exports = class ClientRequests extends Sequelize.Model {
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
        },
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        category: {
          type: DataTypes.ENUM("재난구호", "환경보호", "교육/의료/문화"),
          allowNull: false,
        },
        location: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        img_path: {
          type: DataTypes.STRING(500),
          allowNull: true,
        },
        admit: {
          type: DataTypes.TINYINT,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "ClientRequests",
        tableName: "client_requests",
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
            name: "request_id",
            using: "BTREE",
            fields: [{ name: "identifier" }],
          },
        ],
      }
    );
  }
};
