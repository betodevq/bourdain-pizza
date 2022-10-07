import { Request, Response } from "express";
import { AppDataSource } from "../database.config";
import { Pizza } from "../entities/Pizza.entity";

export const getPizzas = async (req: Request, res: Response) => {
  const pizzas = await AppDataSource.createQueryBuilder(Pizza, "pizza")
    .leftJoin("pizza.ingredients", "ingredients")
    .select(["pizza.id", "pizza.name", "pizza.price", "ingredients.name"])
    .getMany();

  if (pizzas?.length > 0) {
    const formatPizzaIngredients = pizzas.map((pizza) => ({
      ...pizza,
      ingredients: pizza.ingredients.map((i) => i.name),
    }));
    return res.json(formatPizzaIngredients);
  } else {
    return res.json({ message: "No pizzas found" });
  }
};
