import Joi from "joi";

export const orderSchema = Joi.object({
  userName: Joi.string().required(),
  address: Joi.string().min(10).required(),
  cardNumber: Joi.string().pattern(/^[0-9]{16}$/).required(),
  paymentMethod: Joi.string().required(),
  total: Joi.number().required(),
});



