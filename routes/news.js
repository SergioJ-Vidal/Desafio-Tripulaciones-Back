const express = require('express');
const router = express.Router();
const NewController = require('../controllers/NewController')
const { uploadNewsImages } = require("../middleware/multer");
const {authentication, isAdmin} = require('../middleware/authentication')


router.post('/createNew', authentication, uploadNewsImages.single('image'), NewController.create)
router.delete('/deleteNew/:id', authentication, NewController.deleteNew)
router.get('/getAll',NewController.getAll)

module.exports = router;