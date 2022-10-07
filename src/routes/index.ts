import { Router } from "express";
import pizzaRoutes from "./pizza.routes";
import orderRoutes from "./order.routes";

const router = Router();

router.use("/pizzas", pizzaRoutes);
router.use("/orders", orderRoutes);

export default router;
