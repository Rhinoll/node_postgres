const Router = require('express')
const router = new Router()
const viewController = require('../controller/viewController')


router.get('/view', viewController.getView)

module.exports = router
