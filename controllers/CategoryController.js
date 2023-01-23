const { Category } = require('../models/index');

const CategoryController = {

    async create(req, res) {
        try {
            const CategoryN = await Category.create({...req.body})
            res.status(201).send({ msg: 'Categoría creada con éxito', CategoryN });
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: 'Ha habido un problema al crear la categoría' })
        }
    },
}

module.exports = CategoryController;