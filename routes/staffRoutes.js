const Router = require('express')
const router = new Router()
const staffController = require('../controller/staffController')


router.get('/staff', staffController.getStaff)

module.exports = router
