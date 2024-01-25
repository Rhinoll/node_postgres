const Router = require('express')
const router = new Router()
const GuestController = require('../controller/guestController')

router.post('/guest', GuestController.createGuest)
router.get('/guest', GuestController.getGuest)
router.get('/guest/:id', GuestController.getOneGuest)
router.put('/guest', GuestController.updateGuest)
router.delete('/guest/:id', GuestController.deleteGuest)

module.exports = router
