const { Post, User, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const { post } = require("../routes/posts.js");

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
        res.status(500).send({
          message: "Ha habido un problema al cargar las publicaciones",
        });
      });
  },
  async getPostById(req, res) {
    try {
      const post = await Post.findByPk(req.params.id, {
        include: [User],
      });
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Ha habido un problema al traernos post por Id",
        error,
      });
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
    } catch (error) {}
  },

  async deletePost(req,res) {
    try {
      await Post.destroy({
        where:{
          id:req.params.id,
        },
      });
      res.send({msg:"Publicacion eliminada con exito"})
    } catch (error) {
      console.error(err)
      res
        .status(500)
        .send({msg:"Hubo un problema al eliminar el post", err})
    }
  },
  async updatePostById(req,res){
    try {
      await Post.update({title:req.body.title, content:req.body.content},
        {
        where:{
          id:req.params.id
        },
      })
        res.send({msg:"Post actualizado con exito"})
        }catch (error){
            console.error(err)
            res
            .status(500)
            .send({msg:"No se pudo actualizar el post", err})
        }
      }
};
module.exports = PostController;
