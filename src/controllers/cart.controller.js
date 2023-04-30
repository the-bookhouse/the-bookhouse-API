import { db } from '../database/database.connection.js'

export async function getProducts(req, res) {
    const session = res.locals.session
    try {
        const products = await db.collection('cart').find({ userId: session.userId}).toArray()
        if(!products) return res.send([])
        res.send(products)
    }catch(err) {
        res.status(500).send(err.message)
    }
}
export async function postSale(req, res) {
    const {userId, value} = req.body
    try {
        await db.collection('sales').insertOne({userId, value})
        return res.sendStatus(201)
    }catch(err) {
        res.status(500).send(err.message)
    }
}