import { Router } from "express";
import authRouter from "./auth.routes.js";
import cartRouter from "./cart.routes.js";
import orderRouter from "./order.routes.js";
import productsRouter from "./products.routes.js";

const router = Router();

router.use(authRouter);
router.use(productsRouter);
router.use(cartRouter);
router.use(orderRouter)

export default router;
