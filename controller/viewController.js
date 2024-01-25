const db = require('../db')

class viewController {
    async getView(req, res) {
        const allViewsGet = await db.query('SELECT * FROM room_with_guest')
        res.json(allViewsGet.rows)
    }
}

module.exports = new viewController()