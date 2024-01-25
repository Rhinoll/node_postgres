const db = require('../db')

class apartmentController {
    async getApartments(req, res) {
        const allApartmentsGet = await db.query('SELECT * FROM apartment')
        res.json(allApartmentsGet.rows)
    }
    async updateApartment(req, res) {
        const {booking_status, id_room} = req.body
        const updatedService = await db.query('UPDATE apartment SET booking_status = $1 WHERE id_room = $2 RETURNING *',
            [booking_status, id_room])
        res.json(updatedService.rows[0])
    }

}
module.exports = new apartmentController()