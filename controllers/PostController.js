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
        console.log(err); res.status(500)
          .send({
            message: "Ha habido un problema al cargar las publicaciones",
          });
      });
  },

};
module.exports = PostController;
