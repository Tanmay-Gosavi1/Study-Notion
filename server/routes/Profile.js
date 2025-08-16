const express = require('express')
const router = express.Router()

const {
    updateProfile , 
    deleteProfile ,
    getAllDetailsOfUser,
    getEnrolledCourses ,
    updateDisplayPicture
} = require('../controllers/Profile.js')
const { auth, authorizeRole } = require('../middlewares/authMiddleware.js')

router.put('/updateProfile',auth, updateProfile)
router.get('/getAllDetailsOfUser', auth , getAllDetailsOfUser)
router.get('/getEnrolledCourses' , auth , getEnrolledCourses)
router.post('/updateDisplayPicture' , auth , updateDisplayPicture)
router.delete('/deleteProfile', auth , authorizeRole("Student") , deleteProfile)

module.exports = router