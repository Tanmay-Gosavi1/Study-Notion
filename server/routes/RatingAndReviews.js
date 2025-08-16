const express = require('express');
const router = express.Router()

const {createRatingAndReview , getAvgRating ,getAllRatingAndReviews} = require('../controllers/RatingAndReviews')
const { auth, authorizeRole } = require('../middlewares/authMiddleware');


router.post('/createRatingAndReview' , auth , authorizeRole("Student") , createRatingAndReview)
router.get('/getAvgRating' , getAvgRating)
router.get('/getAllRatingAndReviews' , getAllRatingAndReviews)

module.exports = router 