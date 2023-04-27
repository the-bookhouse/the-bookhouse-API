import {db} from "../database/database.connection.js"

export async function authValidate(req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '')
    if(!token) return req.sendStatus(401)

    try {   
        const session = await db.collection("sessions").findOne({token})
        if(!session) return res.sendStatus(401)
        const user = await db.collection("users").findOne({_id: session.userId})
        res.locals.session = session
        res.locals.user = user
        next()
    }catch(err) {
        return res.status(500).send(err.message)
    }
}