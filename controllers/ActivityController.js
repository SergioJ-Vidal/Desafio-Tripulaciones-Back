const { Activity } = require('../models/index');

const ActivityController = {

    async create(req, res) {
        try {
            const ActivityY = await Activity.create({ ...req.body })
            res.status(201).send({ msg: 'Actividad creada con éxito', ActivityY });
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: 'Ha habido un problema al crear la actividad' })
        }
    },
}

module.exports = ActivityController;    