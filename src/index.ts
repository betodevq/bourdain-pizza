import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./data-source";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("database connected");
    app.listen(3000);
    console.log("Server on port 3000");
  } catch (error) {
    console.error(error);
  }
}

main();
