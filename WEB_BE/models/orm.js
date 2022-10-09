const SequelizeAuto = require("sequelize-auto");

const auto = new SequelizeAuto("waita", "azurelogin", "Secretforshare!", {
    host: "mireflare-mysqlserver.mysql.database.azure.com",
    dialect: "mysql",
    directory: "./models/",
    port: "3306",
    caseModel: "c",
    caseFile: "c",
    singularize: true,
    additional: {
        timestamp: false,
    },
    tables: ["user_accounts", "user_info", "client_requests"],
});

auto.run((err) => {
    if(err) throw err;
})