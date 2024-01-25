const db = require('../db')

class GuestController {
    async createGuest(req, res) {
        const {full_name, sex} = req.body
        const newGuestAdd = await db.query('INSERT INTO guest_info (full_name, sex) values ($1, $2) RETURNING *', [full_name, sex])
        res.json(newGuestAdd.rows[0])
    }
    async getGuest(req, res) {
        const allGuestsGet = await db.query('SELECT * FROM guest_info')
        res.json(allGuestsGet.rows)
    }
    async getOneGuest(req, res) {
        const guestId = req.params.id
        const uniqueGuestGet = await db.query('SELECT * FROM guest_info WHERE id_guest = $1', [guestId])
        res.json(uniqueGuestGet.rows[0])
    }
    async updateGuest(req, res) {
        const {id_guest, full_name, sex} = req.body
        const updatedGuest = await db.query('UPDATE guest_info SET full_name = $1, sex = $2 WHERE id_guest = $3 RETURNING *',
            [full_name, sex, id_guest])
        res.json(updatedGuest.rows[0])
    }
    async deleteGuest(req, res) {
        const guestId = req.params.id
        const GuestDelete = await db.query('DELETE FROM guest_info WHERE id_guest = $1', [guestId])
        res.json(GuestDelete.rows[0])
    }
}

module.exports = new GuestController()