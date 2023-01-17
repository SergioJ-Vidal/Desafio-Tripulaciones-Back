const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController')
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/createPost',PostController.createPost)
router.get('/getAll',PostController.getAll)
router.get('/getPostById/:id',PostController.getPostById)
router.get('/getPostByName/:title',PostController.getPostByName)
router.delete('/deletePost/:id',PostController.deletePost)
router.put('/updatePostById/:id',PostController.updatePostById)
module.exports = router;