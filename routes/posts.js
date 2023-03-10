const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController')
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/createPost/:id', authentication, PostController.createPost)
router.get('/getAll',PostController.getAll)
router.get('/getPostById/:id',PostController.getPostById)
router.get('/getPostByName/:title',PostController.getPostByName)
router.delete('/deletePost/:id', authentication,PostController.deletePost)
router.put('/updatePostById/:id', authentication,PostController.updatePostById)

module.exports = router;