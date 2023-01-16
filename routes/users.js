const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.post('/createUser',UserController.create)
router.get('/getUsers',UserController.getUsers)
router.post('/login',UserController.login)

module.exports = router;