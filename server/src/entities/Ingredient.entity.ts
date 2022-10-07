import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ingredient")
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
