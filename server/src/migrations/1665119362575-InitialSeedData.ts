import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSeedData1665119362575 implements MigrationInterface {
  name = "InitialSeedData1665119362575";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO pizza
        (id, name, price, isActive)
        VALUES  (1, 'Margherita', 5, 1),
                (2, 'Bufala', 6, 1),
                (3, 'Romana', 5, 1),
                (4, 'Diavola', 7.5, 1),
                (5, 'Pizza Bianca', 5, 1)`);
    await queryRunner.query(`INSERT INTO ingredient
        (id, name)
        VALUES  (1, 'tomato'),
                (2, 'mozzarella'),
                (3, 'anchovies'),
                (4, 'oregano'),
                (5, 'oil'),
                (6, 'spicy salami'),
                (7, 'mozarella di bufala')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
