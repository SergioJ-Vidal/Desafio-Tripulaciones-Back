const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController')
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/createActivity',  authentication, ActivityController.create)
router.delete('/deleteActivity/:id', isAdmin, authentication,ActivityController.deleteActivityById)
router.get('/getAllActivities/',ActivityController.getAllActivities)
router.get('/getActivityById/:id',ActivityController.getActivityById)
router.put('/updateActivity/:id', isAdmin, authentication,ActivityController.updateActivityById)
router.put('/attendance/:id', authentication, ActivityController.attendance);
router.put('/absence/:id', authentication, ActivityController.absence);
router.put('/help/:id', authentication, ActivityController.help);

module.exports = router;