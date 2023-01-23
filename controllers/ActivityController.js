const { Activity, User } = require("../models/index");

const ActivityController = {

  async create(req, res) {

    try {

      const ActivityY = await Activity.create({ ...req.body, UserId: req.user.id})

      res
        .status(201)
        .send({ message: "Actividad creada con éxito", ActivityY });

    } catch (error) {

      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear la actividad" });
    }

  },

  async deleteActivityById(req, res) {

    try {

      await Activity.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.send({ msg: "Actividad eliminada con exito" });

    } catch (error) {

      console.error(err);
      res
        .status(500)
        .send({ msg: "Hubo un problema al eliminar la noticia", err });
    }
  },

  async getAllActivities(req, res) {

    try {

      const ActivityY = await Activity.findAll({});
      res.send(ActivityY);

    } catch (error) {

      console.error(error);

    }

  },

  async updateActivityById(req, res) {

    try {

      await Activity.update({...req.body },
        {
          where: {
            id: req.params.id
          },
        })

      res.send({ msg: "Actividad actualizada con exito" })

    } catch (error) {

      console.error(err)
      res
        .status(500)
        .send({ msg: "No se pudo actualizar la actividad", err })
    }

  },

  async attendance(req, res) {

    try {

        const ActivityY = await Activity.update(
            {
                where: {
                    id: req.params.id
                },
            },
            { $push: { attendances: req.user.id } },
            { new: true }
        );

        // await ActivityY.save();

        res.send({ msg: "Te interesa el evento", ActivityY });

    } catch (error) {

        console.error(error);
        res.status(500).send({ msg: "Error al confirmar la asistencia" });
        
    }
},
    async attendance(req, res) {

        try {

            const ActivityY = await Activity.update(
              { $push: { attendances: req.params.id } },
              { new: true },
                {
                    where: {
                        id: req.params.id
                    },
                },
               
            );

            res.send({ msg: "Te interesa el evento", ActivityY })

        } catch (error) {

            console.error(error);
            res.status(500).send({ msg: "Error al confirmar la asistencia" })

        }
    },

    async absence(req, res) {

        try {

            const ActivityY = await Activity.update(
                req.params.id,
                { $push: { absences: req.user.id } },
                { new: true }
            );

            res.send({ msg: "No te interesa el evento", ActivityY });

        } catch (error) {

            console.error(error);
            res.status(500).send({ msg: "Error al negar la asistencia" });

        }
    },

    async help(req, res) {

        try {

            const ActivityY = await Activity.update(
                req.params.id,
                { $push: { helps: req.user.id } },
                { new: true }
            );

            res.send({ msg: "Quieres ayudar en el evento", ActivityY });

        } catch (error) {

            console.error(error);
            res.status(500).send({ msg: "Error al ayudar en el evento" });

        }
    },

};

module.exports = ActivityController;
