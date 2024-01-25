const Router = require('express')
const router = new Router()
const service_history_logController = require('../controller/service_history_logController')

router.post('/service_history_log', service_history_logController.createService)
router.get('/service_history_log', service_history_logController.getService)


module.exports = router