const express = require('express');
const router = express.Router();
const RequestController = require('../controllers/RequestController')

router.post('/createRequest',RequestController.createRequest)

module.exports = router; 