const Router = require('express')
const router = new Router()
const additional_servicesController = require('../controller/additional_servicesController')

router.post('/additional_services', additional_servicesController.createService)
router.get('/additional_services', additional_servicesController.getService)
router.get('/additional_services/:id', additional_servicesController.getOneService)
router.put('/additional_services', additional_servicesController.updateSerivce)
router.delete('/additional_services/:id', additional_servicesController.deleteSerivce)

module.exports = router
