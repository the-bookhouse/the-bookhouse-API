import { Router } from "express"
import { authValidate } from "../middlewares/auth.middleware.js"
import { getProducts, postProducts } from "../controllers/cart.controller.js"

const cartRouter = Router()

cartRouter.use(authValidate)

//usado pela pagina de produtos para postar um produto na collection 'cart'
//o objeto postado deve ter o id do usuario, o id do produto, e a quantidade 
cartRouter.post("/cart", postProducts)

//usado pela pagina de carrinho para pegar da collection carrinho todos os produtos adicionados pelo id do user
//deve retornar uma lista contendo os produtos selecionados e a quantidade
cartRouter.get("/cart", getProducts)


export default cartRouter