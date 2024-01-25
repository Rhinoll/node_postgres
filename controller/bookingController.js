const db = require('../db')

class BookingController {
    async createBooking(req, res) {
        const {id_room, id_guest, date_in, date_out} = req.body
        const newBookingAdd = await db.query('INSERT INTO booking (id_room, id_guest, date_in, date_out) values ($1, $2, $3, $4) RETURNING *', [id_room, id_guest, date_in, date_out])
        res.json(newBookingAdd.rows[0])
    }
    async getBooking(req, res) {
        const allBookingsGet = await db.query('SELECT * FROM booking')
        res.json(allBookingsGet.rows)
    }
    async updateBooking(req, res) {
        const {id_reservation, date_in, date_out} = req.body
        const updatedBooking = await db.query('UPDATE booking SET date_in = $1, date_out = $2 WHERE id_reservation = $3 RETURNING *',
            [date_in, date_out, id_reservation])
        res.json(updatedBooking.rows[0])
    }
    async deleteBooking(req, res) {
        const id_reservation = req.params.id
        const GuestBooking = await db.query('DELETE FROM booking WHERE id_reservation = $1', [id_reservation])
        res.json(GuestBooking.rows[0])
    }
}

module.exports = new BookingController()