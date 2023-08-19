const express = require('express')
const useController = require('../controllers/user')
const router = express.Router();


router.get('/appointmentDetail',useController.getDetails)
router.get('/appointmentDetail/:id',useController.getDetailsbyId)
router.post('/appointmentDetail' , useController.postDetail)
router.delete('/appointmentDetail/:id' , useController.deletDetail)
router.put('/appointmentDetail/:id' , useController.updateDetail)
// router.get('/appointmentDetailbyId',useController.getDetailbyId)


module.exports = router;