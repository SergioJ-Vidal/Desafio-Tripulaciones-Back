const { User, Post } = require("../models/index.js");

const UserController = {
  createUser(req, res) {
    req.body.role = "user";
    User.create(req.body)
      .then((user) =>
        res.status(201).send({ message: "Usuario creado con éxito", user })
      )
      .catch(console.error);
  },
  getUsers(req, res) {
    User.findAll({
      include: [Post],
    })
      .then((users) => res.send(users))
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({
            message: "Ha habido un problema al cargar los usuarios 1",
          });
      });
  },
};

module.exports = UserController;
