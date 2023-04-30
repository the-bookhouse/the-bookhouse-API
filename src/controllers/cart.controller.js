import { db } from '../database/database.connection.js'

export async function postProducts(req, res) {
    //usado pela pagina de produtos para postar um produto na collection 'cart'
    //o objeto postado deve ter o id do usuario, o id do produto, e a quantidade
}

export async function getProducts(req, res) {
    //usado pela pagina de carrinho para pegar da collection carrinho todos os produtos adicionados pelo id do user
    //deve retornar uma lista contendo os produtos selecionados e a quantidade
}