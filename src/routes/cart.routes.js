import { Router } from "express"
import { authValidate } from "../middlewares/auth.middleware.js"
import { getProducts, postSale } from "../controllers/cart.controller.js"

const cartRouter = Router()

cartRouter.use(authValidate)

//usado pela pagina de carrinho para pegar da collection carrinho todos os produtos adicionados pelo id do user
//deve retornar uma lista contendo os produtos selecionados e a quantidade
cartRouter.get("/cart", getProducts)

cartRouter.post("/checkout", postSale)


export default cartRouter