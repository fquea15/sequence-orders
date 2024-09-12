/** @format */

import { Router } from "express";
import { createOrder, getAllOrders } from "../controllers/cart.controller";

const orderRoutes = Router();

orderRoutes.post("/order", createOrder);
orderRoutes.get("/order", getAllOrders);

export default orderRoutes;
