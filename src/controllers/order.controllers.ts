import { Request, Response } from "express";
import { AppDataSource } from "../database.config";
import { Item } from "../entities/Item.entity";
import { Order } from "../entities/Order.entity";

export const createOrder = async (req: Request, res: Response) => {
  console.log('req.body', req.body)  
  const order = new Order()
  let items: Item[] = [];

  if (req.body.items.length > 0){
    for (const item of req.body.items) {
      const orderItem = new Item()
      orderItem.pizza = item.pizza
      orderItem.quantity = item.quantity
      items.push(orderItem)
      await orderItem.save()
    }
    order.items = items;
    console.log('order', order)
    await order.save()
  }
  console.log('req.body', req.body.items)
  return res.json(order);
};

export const getOrders = async (req: Request, res: Response) => {
  const orders = await AppDataSource.createQueryBuilder(Order, "order")
  .leftJoin("order.items", "items")
  .leftJoin("items.pizza", "pizza")
  .select([
    "order", 
    "pizza",
    "items",
  ])
  .getMany();
  return res.json(orders);
};

export const getOrderDetail = async (req: Request, res: Response) => {
};