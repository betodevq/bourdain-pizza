import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./database.config";

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(4000);
  } catch (error) {
    console.error(error);
  }
}

main();
