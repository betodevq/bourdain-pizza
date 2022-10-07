import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "bourdain",
    password: "root",
    synchronize: false,
    database: "bourdain-core",
    entities: ["src/entities/*.entity.ts"],
    migrations: ["src/migrations/*.ts"],
    migrationsTableName: "migrations",
    logging: true,
});