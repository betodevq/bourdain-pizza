import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order.entity";
import { Pizza } from "./Pizza.entity";

@Entity("item")
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @OneToOne(() => Pizza, { nullable: false })
  @JoinColumn()
  pizza: Pizza;

  @Column({ nullable: false, type: "integer" })
  quantity: number;
}
