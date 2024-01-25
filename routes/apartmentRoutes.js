const Router = require('express')
const router = new Router()
const ApartmentController = require('../controller/apartmentController')


router.get('/apartment', ApartmentController.getApartments)
router.put('/apartment', ApartmentController.updateApartment)


module.exports = router
