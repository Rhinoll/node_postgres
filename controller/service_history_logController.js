const db = require('../db')

class service_history_logController {
    async getService(req, res) {
        const allServicesGet = await db.query('SELECT * FROM service_history_log')
        res.json(allServicesGet.rows)
    }
    async createService(req, res) {
        const {id_room, id_worker, description, exec_day} = req.body
        const newSerivceAdd = await db.query('INSERT INTO service_history_log (id_room, id_worker, description, exec_day) values ($1, $2, $3, $4) RETURNING *', [id_room, id_worker, description, exec_day])
        res.json(newSerivceAdd.rows[0])
    }

}
module.exports = new service_history_logController()