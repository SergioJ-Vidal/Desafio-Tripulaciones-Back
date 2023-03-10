const express = require('express');
const router = express.Router();
const { uploadRequestImages } = require("../middleware/multer");
const RequestController = require('../controllers/RequestController')
const { authentication, isAdmin } = require('../middleware/authentication')


router.post('/createRequest/:id', uploadRequestImages.single('image'), authentication, RequestController.createRequest)
router.get('/getAll', RequestController.getAll)
router.delete('/deleteRequest/:id', authentication, RequestController.deleteRequest)
router.put('/updateRequestById/:id', authentication,RequestController.updateRequestById)


module.exports = router; 