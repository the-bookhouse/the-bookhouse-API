import { ObjectId } from 'mongodb'
import { db } from '../database/database.connection.js'

export async function getProductsList(req, res) {

    const session = res.locals.session

    try {
        if (!session) return res.sendStatus(401)
        const productsList = await db.collection("products").find().toArray()
        res.status(200).send(productsList)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postProducts(req, res) {

    const session = res.locals.session;
    const { id } = req.body

    try {
        await db.collection("cart").insertOne({
            userId: new ObjectId(session.userId),
            productId: id,
        })
        const p = await db.collection("cart").find().toArray()
        res.status(200).send(p)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

