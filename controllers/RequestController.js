const { Request, User, Category } = require("../models/index");

const RequestController = {

  async createRequest(req, res) {

    if (req.file) req.body.image = req.file.filename;

    try {

      const newN = await Request.create({ ...req.body, UserId: req.user.id });
      newN.addCategory(req.body.CategoryId);
      res.status(201).send({ msg: "Petición creada con éxito", newN });

    } catch (error) {

      console.error(error);
      res.status(500).send({ msg: "Ha habido un problema al crear la petición" });

    }
  },

  async updateRequestById(req, res) {

    try {

      await Request.update({ ...req.body },
        {
          where: {
            id: req.params.id
          },
        })

      res.send({ msg: "Petición actualizado con exito" })

    } catch (error) {

      console.error(err)
      res.status(500).send({ msg: "No se pudo actualizar la petición", error})

    }
  },

  async deleteRequest(req, res) {

    try {

      await Request.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.send({ msg: "Petición eliminada con exito" })

    } catch (error) {

      console.error(error)
      res.status(500).send({ msg: "Hubo un problema al eliminar la petición", error})
      
    }
  },

  async getAll(req, res) {

    try {

      const requests = await Request.findAll({
        include: [
          { model: User },
          { model: Category }
        ]
      });
      res.send(requests);

    } catch (error) {

      console.error(error);
      res.status(500).send({ msg: 'Ha habido un problema al cargar las peticiones' })
      
    }
  },
}

module.exports = RequestController  
