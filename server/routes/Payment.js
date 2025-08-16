const express = require('express');
const router = express.Router()

const {capturePayment , verifySignature} = require('../controllers/Payment');
const { auth, authorizeRole } = require('../middlewares/authMiddleware');

router.post('/capturePayment',auth , authorizeRole("Student") , capturePayment)
router.post('/verifySignature' , verifySignature)


module.exports = router