import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middlewares.js";
import { orderSchema } from "../schemas/order.schemas.js";
import { saveOrder, getAllOrders } from "../controllers/order.controllers.js";

const orderRouter = Router();

orderRouter.post("/orders", validateSchema(orderSchema), saveOrder);
orderRouter.get("/orders", getAllOrders);

export default orderRouter;


