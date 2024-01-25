const db = require('../db')

class additional_servicesController {
    async createService(req, res) {
        const {id_guest, type_of_service, price} = req.body
        const newServiceAdd = await db.query('INSERT INTO additional_services (id_guest, type_of_service, price) values ($1, $2, $3) RETURNING *', [id_guest, type_of_service, price])
        res.json(newServiceAdd.rows[0])
    }
    async getService(req, res) {
        const allServicesGet = await db.query('SELECT * FROM additional_services')
        res.json(allServicesGet.rows)
    }
    async getOneService(req, res) {
        const serivceId = req.params.id
        const uniqueServiceGet = await db.query('SELECT * FROM additional_services WHERE id_service = $1', [serivceId])
        res.json(uniqueServiceGet.rows[0])
    }
    async updateSerivce(req, res) {
        const {id_service, id_guest, type_of_service, price} = req.body
        const updatedService = await db.query('UPDATE additional_services SET id_guest = $1, type_of_service = $2, price = $3 WHERE id_service = $4 RETURNING *',
            [id_guest, type_of_service, price, id_service])
        res.json(updatedService.rows[0])
    }
    async deleteSerivce(req, res) {
        const serviceId = req.params.id
        const serviceDelete = await db.query('DELETE FROM additional_services WHERE id_service = $1', [serviceId])
        res.json(serviceDelete.rows[0])
    }
}

module.exports = new additional_servicesController()