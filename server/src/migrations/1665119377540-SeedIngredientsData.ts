import { MigrationInterface, QueryRunner } from "typeorm"

export class SeedIngredientsData1665119377540 implements MigrationInterface {
    name = "SeedIngredientsData1665119377540";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO pizza_ingredients_ingredient
        (pizzaId, ingredientId) 
        VALUES  (1, 1), (1, 2),
                (2, 1), (2, 7),
                (3, 1), (3, 2), (3, 3), (3, 4), (3, 5),
                (4, 1), (4, 2), (4, 6),
                (5, 2), (5, 4)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
