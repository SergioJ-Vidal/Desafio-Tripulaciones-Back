const { Request } = require('../models/index')

const RequestController = {

    async createRequest(req, res) {
        if (req.file) req.body.image = req.file.filename
        try {
            const newN = await Request.create({ ...req.body, UserId: req.user.id })
            res.status(201).send({ message: 'Petición creada con éxito', newN });
            
        } catch (err) {
            err
            next(err)
        }
    },
}

if (req.file) req.body.image = req.file.filename


module.exports = RequestController