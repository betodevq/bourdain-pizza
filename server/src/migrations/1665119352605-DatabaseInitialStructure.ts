import { MigrationInterface, QueryRunner } from "typeorm";

export class DatabaseInitialStructure1665119352605 implements MigrationInterface {
    name = 'DatabaseInitialStructure1665119352605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`ingredient\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pizza\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`price\` double NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_a6feeec55588d8a53fe776f8f8\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`orderId\` int NULL, \`pizzaId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pizza_ingredients_ingredient\` (\`pizzaId\` int NOT NULL, \`ingredientId\` int NOT NULL, INDEX \`IDX_0bb1511e3c9a3bdaa7f452c70e\` (\`pizzaId\`), INDEX \`IDX_94400b94f05d59187b30935533\` (\`ingredientId\`), PRIMARY KEY (\`pizzaId\`, \`ingredientId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD CONSTRAINT \`FK_950e218c17c81d5a9ffa1b96080\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD CONSTRAINT \`FK_5f487cf29e8cf4dfb6fb8518f69\` FOREIGN KEY (\`pizzaId\`) REFERENCES \`pizza\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pizza_ingredients_ingredient\` ADD CONSTRAINT \`FK_0bb1511e3c9a3bdaa7f452c70e5\` FOREIGN KEY (\`pizzaId\`) REFERENCES \`pizza\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`pizza_ingredients_ingredient\` ADD CONSTRAINT \`FK_94400b94f05d59187b30935533e\` FOREIGN KEY (\`ingredientId\`) REFERENCES \`ingredient\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pizza_ingredients_ingredient\` DROP FOREIGN KEY \`FK_94400b94f05d59187b30935533e\``);
        await queryRunner.query(`ALTER TABLE \`pizza_ingredients_ingredient\` DROP FOREIGN KEY \`FK_0bb1511e3c9a3bdaa7f452c70e5\``);
        await queryRunner.query(`ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_5f487cf29e8cf4dfb6fb8518f69\``);
        await queryRunner.query(`ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_950e218c17c81d5a9ffa1b96080\``);
        await queryRunner.query(`DROP INDEX \`IDX_94400b94f05d59187b30935533\` ON \`pizza_ingredients_ingredient\``);
        await queryRunner.query(`DROP INDEX \`IDX_0bb1511e3c9a3bdaa7f452c70e\` ON \`pizza_ingredients_ingredient\``);
        await queryRunner.query(`DROP TABLE \`pizza_ingredients_ingredient\``);
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP TABLE \`item\``);
        await queryRunner.query(`DROP INDEX \`IDX_a6feeec55588d8a53fe776f8f8\` ON \`pizza\``);
        await queryRunner.query(`DROP TABLE \`pizza\``);
        await queryRunner.query(`DROP TABLE \`ingredient\``);
    }

}
