import { ObjectId } from 'mongodb'
import { db } from '../database/database.connection.js'

export async function getProducts(req, res) {
    const session = res.locals.session
    try {
        const products = await db.collection('cart').find({ userId: new ObjectId(session.userId) }).toArray()
        const list = []
        for(let i = 0; i < products.length; i++) {
            const info = await db.collection('products').findOne({_id: new ObjectId(products[i].productId)})
            list.push(info)
        }
        res.send(list)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postSale(req, res) {
    const { userId, value } = req.body
    try {
        await db.collection('sales').insertOne({ userId, value })
        return res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}