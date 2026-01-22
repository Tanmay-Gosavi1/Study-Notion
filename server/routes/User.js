const express = require('express')
const router = express.Router()

const {login, signup , sendOTP , changePassword , logout} = require('../controllers/Auth.js')
const {auth , authorizeRole} = require('../middlewares/authMiddleware.js')
const {resetPasswordToken , resetPassword} = require('../controllers/resetPassword.js')

router.post('/login' , login)
router.post('/signup' ,signup)
router.post('/sendotp' , sendOTP)
router.post('/logout', logout)
router.post('/changepassword', auth , changePassword)
router.post('/reset-password-token', resetPasswordToken)
router.post('/reset-password', resetPassword)

module.exports = router ;