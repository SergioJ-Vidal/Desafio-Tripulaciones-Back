const express = require('express');
const router = express.Router();
const RequestController = require('../controllers/RequestController')
const {authentication } = require('../middleware/authentication')


router.post('/createRequest', authentication,RequestController.createRequest)

module.exports = router; 