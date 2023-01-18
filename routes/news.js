const express = require('express');
const router = express.Router();
const NewController = require('../controllers/NewController')
const {authentication, isAdmin} = require('../middleware/authentication')


router.post('/createNew',authentication,NewController.create)

module.exports = router;