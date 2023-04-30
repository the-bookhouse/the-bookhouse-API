import { Router } from "express"
import { authValidate } from "../middlewares/auth.middleware.js"
import { getProductsList, postProducts } from "../controllers/products.controller.js"

const productsRouter = Router()

productsRouter.use(authValidate)

productsRouter.post("/home", postProducts)

productsRouter.get("/home", getProductsList)


export default productsRouter;