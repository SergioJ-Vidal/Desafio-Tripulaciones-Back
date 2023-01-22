const { Activity } = require('../models/index');

const ActivityController = {

    async create(req, res) {

        try {
            const Activity = await Activity.create({...req.body})
            res.status(201).send({ message: 'Actividad creada con éxito', Activity });
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear la actividad' })
        }
    },
}

module.exports = ActivityController;