import {db} from '../database/database.connection.js'

export async function postProducts(req, res) {
    //usado pela pagina de produtos para postar um produto na collection 'cart'
    //o objeto postado deve ter o id do usuario, o id do produto, e a quantidade 
}

export async function getProducts(req, res) {
    const {user, session} = res.locals
    try {
        const products = await db.collection('cart').find({ userId: user.userId}).toArray()
        if(!products) return res.send([])
        res.send(products)
    }catch(err) {
        res.status(500).send(err.message)
    }
}