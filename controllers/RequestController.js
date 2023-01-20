const { Request } = require('../models/index')

const RequestController = {
    createRequest(req, res) {
        Request.create(req.body)
            .then((request) =>
                res.status(201).send({ message: "Petición creada con éxito", request })
            )
            .catch(console.error);
    },
}


module.exports = RequestController