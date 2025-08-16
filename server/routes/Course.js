const express = require('express');
const router = express.Router()

const {createCourse , showAllCourses , courseDetails, editCourse} = require('../controllers/Course')
const {createSection , updateSection , deleteSection} = require('../controllers/Section')
const {createSubSection , updateSubSection ,deleteSubSection} = require('../controllers/SubSection');
const { auth, authorizeRole } = require('../middlewares/authMiddleware');
const { getInstructorCourses } = require('../controllers/Profile');

router.post('/createCourse' , auth , authorizeRole("Instructor") , createCourse)
router.get('/showAllCourses' , showAllCourses)
router.post('/courseDetails', courseDetails)
router.post('/editCourse' ,auth , authorizeRole("Instructor"), editCourse)
router.get('/getInstructorCourses' , getInstructorCourses)


router.post('/createSection', auth , authorizeRole("Instructor") , createSection)
router.patch('/updateSection' , auth , authorizeRole("Instructor"), updateSection)
router.delete('/deleteSection', auth , authorizeRole("Instructor") , deleteSection)

router.post('/createSubSection', auth , authorizeRole("Instructor"),createSubSection)
router.patch('/updateSubSection' , auth , authorizeRole("Instructor"), updateSubSection)
router.delete('/deleteSubSection' , auth , authorizeRole("Instructor"), deleteSubSection)

module.exports = router