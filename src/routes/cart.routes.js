import { Router } from "express"
import { authValidate } from "../middlewares/auth.middleware.js"
import { getProducts, postSale } from "../controllers/cart.controller.js"

const cartRouter = Router()

cartRouter.use(authValidate)
cartRouter.get("/cart", getProducts)
cartRouter.post("/checkout", postSale)


export default cartRouter