import { orderSchema } from "../schemas/order.schemas.js";
import { db } from '../database/database.connection.js'
import { ObjectId } from 'mongodb'

export async function saveOrder(req, res) {
  const { userName, address, cardNumber, paymentMethod, total } = req.body;
  const { error } = orderSchema.validate({ userName, address, cardNumber, paymentMethod, total });
  
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  
  const session = res.locals.session

  try {
    const result = await db.collection("order").insertOne({
      userId: new ObjectId(session.userId),
      userName: userName,
      address: address,
      cardNumber: cardNumber,
      paymentMethod: paymentMethod,
      total: total,
    });
    const order = await db.collection("order").findOne({ _id: result.insertedId });
    res.status(200).send(order)
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}


export async function getAllOrders(req, res) {
  const session = res.locals.session;
  try {
    const orders = await db.collection("order").find({ userId: new ObjectId(session.userId) }).toArray();
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}
