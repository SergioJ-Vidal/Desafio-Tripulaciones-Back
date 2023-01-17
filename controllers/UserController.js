const { User, Post, Token } = require("../models/index.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {

  async create(req, res, next) {

    try {

      const hash = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({ ...req.body, password: hash, confirmed: false, rol: "user" })

      const emailToken = jwt.sign({email:req.body.email},jwt_secret,{expiresIn:'48h'})
      const url = 'http://localhost:8080/users/confirm/' + emailToken

      await transporter.sendMail({
        to: req.body.email,
        subject: "Confirme su registro",
        html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
        <a href="${url}"> Click para confirmar tu registro</a>
        `,
      });

      res.status(201).send({ message: 'Usuario creado con éxito', user });

    } catch (err) {
      err
      next(err)
    }
  },


  login(req, res) {

    User.findOne({
      where: {
        email: req.body.email
      }

    }).then(user => {
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
    })
  },

  async confirm(req, res) {
    try {
      const token = req.params.emailToken
      const payload = jwt.verify(token,jwt_secret)
      await User.update({ confirmed: true }, {
        where: {
          email: payload.email
        }
      })
      res.status(201).send("Usuario confirmado con éxito");
    } catch (error) {
      console.error(error)
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
      res.send({ message: 'Desconectado con éxito' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Hubo un problema al tratar de desconectarte' })
    }
  },

  getUsers(req, res) {

    User.findAll({
      include: [Post],
    })

      .then((users) => res.status(201).send({ message: "Usuarios obtenidos:", users }))
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
<<<<<<< HEAD
        msg: "Ha habido un problema al traer los usuarios por su nombre",
=======
        msg: "Ha habido un problema al traernos user su nombree",
>>>>>>> develop
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
