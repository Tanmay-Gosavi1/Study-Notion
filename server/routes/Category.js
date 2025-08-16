const express = require('express');
const router = express.Router()

const {createCategory,showAllCategory,categoryPage} = require('../controllers/CategoryHandler');
const { auth, authorizeRole } = require('../middlewares/authMiddleware');

router.post('/createCategory' , auth , authorizeRole('Admin') ,createCategory )
router.get('/showAllCategory',showAllCategory)
router.get('/categoryPage' , categoryPage)

module.exports = router