const express = require('express')
const userControllers = require('../controllers/userControllers')
const protect = require('../middlewares/authMiddleware')

const router = express.Router()

router.route('/').post(userControllers.registerUser).get(userControllers.loginUser)
router.route('/login').post(userControllers.loginUser)
router.route('/:id').put(protect, userControllers.updateUser)


module.exports = router
