const { Post, User, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

const PostController = {

  async createPost(req, res) {
    try {
      const PostN = await Post.create({ ...req.body, UserId: req.user.id });
      res.status(201).send({ message: 'Comentario creado con éxito', PostN });
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Ha habido un problema al crear el comentario' })
    }
  },

  async getAll(req, res) {
    try {
      const posts = await Post.findAll({
        include: [
          { model: User },
        ]
      });
      res.send(posts);
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Ha habido un problema al cargar los comentarios' })
    }
  },

  async getPostById(req, res) {
    try {
      const post = await Post.findByPk(req.params.id, {
        include: [User],
      });
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({msg: "Ha habido un problema al traernos el comentario por Id",
      error,});
    }
  },

  async getPostByName(req, res) {
    try {
      const post = await Post.findOne({
        where: {
          title: {
            [Op.like]: `%${req.params.title}%`,
          },
        },
        include: [User],
      });
      res.send(post);
    } catch (error) { }
  },

  async deletePost(req, res) {
    try {
      await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ msg: "Publicacion eliminada con exito" })
    } catch (error) {
      console.error(error)
      res.status(500).send({ msg: "Hubo un problema al eliminar el post", error})
    }
  },
  async updatePostById(req, res) {
    try {
      await Post.update({ title: req.body.title, content: req.body.content },
        {
          where: {
            id: req.params.id
          },
        })
      res.send({ msg: "Post actualizado con exito" })
    } catch (error) {
      console.error(err)
      res.status(500).send({ msg: "No se pudo actualizar el post", error})
    }
  },
};

module.exports = PostController;
