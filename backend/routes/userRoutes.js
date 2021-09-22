import { Router } from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middelware/authMiddelware.js'
const router = Router()

// @desc    auth the user and get a token
// @route   POST api/users/login
// @access  public
router.post('/login', authUser)

// @desc    get logged in a user
// @route   GET api/users/profile
// @access  private
// &&
// @desc    update user profile
// @route   PUT api/users/profile
// @access  private
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

// @desc    register a user
// @route   POST api/users
// @access  public
router.route('/').post(registerUser)

export default router
