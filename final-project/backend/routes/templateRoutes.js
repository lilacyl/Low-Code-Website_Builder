const express = require('express')
const templateControllers = require('../controllers/templateControllers')
const protect = require('../middlewares/authMiddleware')

const router = express.Router()

router.route('/').post(protect, templateControllers.CreateTemplate).get(protect, templateControllers.GetAllTemplate)
// router.route('/login').post(userControllers.loginUser)
router.route('/:id').get(protect, templateControllers.GetTemplate).delete(protect, templateControllers.deleteTemplate)
router.route('/:id/visit').get(templateControllers.GetTemplate)


module.exports = router
