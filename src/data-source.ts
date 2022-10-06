import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "bourdain",
    password: "root",
    database: "bourdain-core",
    entities: ["src/Entity/*.ts"],
    logging: true,
});