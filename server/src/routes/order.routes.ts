import { Router } from "express";
import { createOrder, getOrderDetail, getOrders } from "../controllers/order.controllers";

const router = Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.get("/:id", getOrderDetail);

export default router;