import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ingredient } from "./Ingredient.entity";

@Entity("pizza")
export class Pizza extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false, type: "double" })
  price: number;

  @ManyToMany(() => Ingredient, {
    nullable: false,
  })
  @JoinTable()
  ingredients: Ingredient[];

  @Column({ nullable: false, default: true, type: "boolean" })
  isActive: boolean;
}
