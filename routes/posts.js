const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController')

router.post('/createPost',PostController.createPost)
router.get('/getAll',PostController.getAll)

module.exports = router;