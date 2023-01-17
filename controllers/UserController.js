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
        res.status(500).send({
          message: "Ha habido un problema al cargar los usuarios",
        });
      });
  },
  async getUserById(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        include: [Post],
      });
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Ha habido un problema al traernos user por Id",
        error,
      });
    }
  },
  async getUserByName(req, res) {
    try {
      const user = await User.findAll({
        $text: {
          $search: req.params.name,
        },
      });
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Ha habido un problema al traernos user su nombre",
        error,
      });
    }
  },
  async deleteUserById(req, res) {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    await Post.destroy({
      where: {
        UserId: req.params.id,
      },
    });
    res.send("El usuario fue eliminado con exito");
  },
  
};

module.exports = UserController;
