import { Router } from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from '../controllers/productController.js'
import { protect, admin } from '../middelware/authMiddelware.js'
const router = Router()

// @desc    Fetch all products
// @route   GET api/products
// @access  public
router.route('/').get(getProducts).post(protect, admin, createProduct)

// @desc    Fetch single product
// @route   GET api/products/:id
// @access  public
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router
