const { New, Category, Sequelize } = require('../models/index');
const { Op } = Sequelize;

const NewController = {
    async create(req, res) {
        if (req.file) req.body.image = req.file.filename
        try {
            const newN = await New.create({ ...req.body, UserId: req.user.id, CategoryId: req.body.category })
            res.status(201).send({ message: 'Noticia creada con éxito', newN });
        } catch (err) {
            err
            next(err)

        }

    },

    async getAll(req, res) {
        try {
            const news = await New.findAll({
                include: Category,
            });
            res.send(news);
        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = NewController;