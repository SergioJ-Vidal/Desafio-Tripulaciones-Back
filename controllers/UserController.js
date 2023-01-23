const { User, Request, Post, Token } = require("../models/index.js");
const { Op } = require("sequelize")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {

  async create(req, res, next) {
    if (req.file) req.body.image = req.file.filename
    try {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({ ...req.body, password: hash, role: "user" })
      res.status(201).send({ msg: 'Usuario creado con éxito', user });
    } catch (err) {

      next(err)

    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }})
        if (!user) {
          return res.status(400).send({ message: "Usuario o contraseña incorrectos" })
        }
        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if (!isMatch) {
          return res.status(400).send({ message: "Usuario o contraseña incorrectos" })
        }
        const token = jwt.sign({ id: user.id }, jwt_secret);
        Token.create({ token, UserId: user.id });
        res.send({ message: 'Bienvenid@ ' + user.name, user, token });

    } catch (error) {

      console.log(error);
        res.status(500).send({
          message: "Ha habido un problema al logear",
        });
    }
  },
  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization }
          ]
        }
      });
      res.send({ msg: 'Desconectado con éxito' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ msg: 'Hubo un problema al tratar de desconectarte' })
    }
  },

  async getUsers(req, res) {
    try {
      const users = await User.find({
        include: [
          { model: Request },
        ]
      })
      res.send({ msg: "Usuarios obtenidos:", users });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al cargar los usuarios" })
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        // include: [Post]
      });
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Ha habido un problema al traernos user por Id",
        error
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
        msg: "Ha habido un problema al traer los usuarios por su nombre",
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

}

module.exports = UserController;
