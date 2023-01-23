const { New, Category, Sequelize, } = require("../models/index");
const { Op } = Sequelize;

const NewController = {
  async create(req, res) {
    if (req.file) req.body.image = req.file.filename;
    try {
      const newN = await New.create({
        ...req.body,
        UserId: req.user.id,
        CategoryId: req.body.category,
      });
      res.status(201).send({ message: "Noticia creada con éxito", newN });
    } catch (err) {
      err;
      next(err);
    }
  },

  async getAll(req, res) {
    try {
      const news = await New.findAll({
      });
      res.send(news);
    } catch (error) {
      console.error(error);
    }
  },

  async deleteNew(req,res) {
    try {
      await New.destroy({
        where:{
          id:req.params.id,
        },
      });
      res.send({msg:"Noticia eliminada con exito"})
    } catch (error) {
      console.error(err)
      res
        .status(500)
        .send({msg:"Hubo un problema al eliminar la noticia", err})
    }
  },
};

module.exports = NewController;
