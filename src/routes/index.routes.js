import { Router } from "express";
import authRouter from "./auth.routes.js";
import cartRouter from "./cart.routes.js";
import productsRouter from "./products.routes.js";

const router = Router();

router.use(authRouter);
router.use(productsRouter);
router.use(cartRouter);

export default router;
