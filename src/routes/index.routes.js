import { Router } from 'express'
import cartRouter from './cart.routes.js'

const router = Router()

router.use(cartRouter)

export default router