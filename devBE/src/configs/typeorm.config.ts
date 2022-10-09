import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "mireflare-mysqlserver.mysql.database.azure.com",
    port: 3306,
    username: "azurelogin",
    password: "Secretforshare!",
    database: "waita",
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    synchronize: true // false at production
}