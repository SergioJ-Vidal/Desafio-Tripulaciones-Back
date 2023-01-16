const { Post, User } = require("../models/index.js");

const PostController = {
  createPost(req, res) {
    Post.create(req.body)
      .then((post) =>
        res.status(201).send({ message: "Publicación creada con éxito", post })
      )
      .catch(console.error);
  },

  getAll(req, res) {
    Post.findAll({
      include: [User],
    })
      .then((posts) => res.send(posts))
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({
            message: "Ha habido un problema al cargar las publicaciones",
          });
      });
  },
  async getPostById(req, res) {
    try {
      const post = await Post.findByPk(req.params.id);
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Ha habido un problema al traernos post por Id",
        error,
      });
    }
  },
};
module.exports = PostController;
