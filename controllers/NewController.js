const { New, Category, Sequelize } = require('../models/index');
const { Op } = Sequelize;

const NewController = {

    async create(req, res) {

        if (req.file) req.body.image = req.file.filename

        try {

            // const formData = new FormData();
            // if (image.files[0]) formData.set('image', image.files[0]);
            // formData.set('title', req.body.title)
            // formData.set('body', req.body.body)
            // formData.set('category', req.body.category)

            const newN = await New.create({ ...req.body, UserId: req.user.id, CategoryId: req.body.category })

            // const newN = await New.create({ formData, UserId: req.user.id})

            res.status(201).send({ message: 'Noticia creada con éxito', newN });

        } catch (err) {

            err


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