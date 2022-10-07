import { Router } from "express";
import { getPizzas } from "../controllers/pizza.controllers";

const router = Router();

router.get("/", getPizzas);

export default router;