const db = require('../db')

class staffController {
    async getStaff(req, res) {
        const allStaffsGet = await db.query('SELECT * FROM staff')
        res.json(allStaffsGet.rows)
    }
}

module.exports = new staffController()