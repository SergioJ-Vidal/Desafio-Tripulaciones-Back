const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController')

router.post('/createPost',PostController.createPost)
router.get('/getAll',PostController.getAll)
router.get('/getPostById/:id',PostController.getPostById)
router.get('/getPostByName/:title',PostController.getPostByName)
module.exports = router;