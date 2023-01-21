const express = require('express');
const router = express.Router();
const { uploadRequestImages } = require("../middleware/multer");
const RequestController = require('../controllers/RequestController')
const {authentication } = require('../middleware/authentication')


router.post('/createRequest',uploadRequestImages.single('image'),authentication,RequestController.createRequest)
router.get('/getAll',RequestController.getAll)


module.exports = router; 