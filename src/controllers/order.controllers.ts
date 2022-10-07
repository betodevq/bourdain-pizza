import { Request, Response } from "express";
import { AppDataSource } from "../database.config";
import { Item } from "../entities/Item.entity";
import { Order } from "../entities/Order.entity";
import { flattenPizzaIngredients } from "../utils";

const getOrdersQuery = async (
  singleOrder?: boolean,
  orderId?: number
): Promise<any> => {
  let query = AppDataSource.createQueryBuilder(Order, "order")
    .leftJoin("order.items", "items")
    .leftJoin("items.pizza", "pizza")
    .leftJoin("pizza.ingredients", "ingredients")
    .select(["order", "pizza", "items", "ingredients.name"]);

  if (singleOrder) {
    query.where("order.id = :orderId", {
      orderId,
    });
    return await query.getOne();
  } else {
    return await query.getMany();
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const order = new Order();
  const items: Item[] = [];

  if (req.body.items.length > 0) {
    for (const item of req.body.items) {
      const orderItem = new Item();
      orderItem.pizza = item.pizza;
      orderItem.quantity = item.quantity;
      items.push(orderItem);
      await orderItem.save();
    }
    order.items = items;
    await order.save();
  }

  if (order) {
    const createdOrder = await getOrdersQuery(true, order.id);
    createdOrder.items = flattenPizzaIngredients(createdOrder.items);
    return res.json(createdOrder);
  } else {
    return res.json({ message: "Error creating order" });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  const orders: Order[] = await getOrdersQuery();

  if (orders.length > 0) {
    const processedOrders = JSON.parse(JSON.stringify(orders));
    for (const order of processedOrders) {
      if (order.items.length > 0) {
        order.items = flattenPizzaIngredients(order.items);
      }
    }
    return res.json(processedOrders);
  } else {
    return res.json({ message: "No orders found" });
  }
};

export const getOrderDetail = async (req: Request, res: Response) => {
  const orderId: number = Number(req.params.id);
  const order = await getOrdersQuery(true, orderId);
  if (order) {
    order.items = flattenPizzaIngredients(order.items);
    return res.json(order);
  } else {
    return res.json({ message: "Order not found" });
  }
};
