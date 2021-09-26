import { Router } from 'express'
import { protect } from '../middelware/authMiddelware.js'
const router = Router()
import { addOrderItems } from '../controllers/orderController.js'

router.route('/').post(protect, addOrderItems)

export default router
