const { Request, User, Category } = require("../models/index");

const RequestController = {
  async createRequest(req, res) {
    if (req.file) req.body.image = req.file.filename;

    try {
      const newN = await Request.create({ ...req.body, UserId: req.user.id });
      newN.addCategory(req.body.CategoryId);

      res.status(201).send({ message: "Petición creada con éxito", newN });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear la petición" });
    }
  },

  async getAll(req, res) {
    try {
      const requests = await Request.findAll({
        include: [{ model: User }, { model: Category }],
      });

      res.send(requests);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = RequestController;
