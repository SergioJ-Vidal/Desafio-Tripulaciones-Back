const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController')
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/createPost',PostController.createPost)
router.get('/getAll',PostController.getAll)

module.exports = router;