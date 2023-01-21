const express = require('express');
const router = express.Router();
const { uploadRequestImages } = require("../middleware/multer");
const RequestController = require('../controllers/RequestController')
const {authentication } = require('../middleware/authentication')


router.post('/createRequest',uploadRequestImages.single('image'),authentication,RequestController.createRequest)

module.exports = router; 