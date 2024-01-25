const Router = require('express')
const router = new Router()
const bookingController = require('../controller/bookingController')

router.post('/booking', bookingController.createBooking)
router.get('/booking', bookingController.getBooking)
router.put('/booking', bookingController.updateBooking)
router.delete('/booking/:id', bookingController.deleteBooking)

module.exports = router
