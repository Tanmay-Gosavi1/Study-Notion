const RatingAndReview = require('../models/RatingAndReviews.js')
const Course = require('../models/Course.js')

exports.createRatingAndReview = async (req,res) =>{
    try {
        const {rating , review , courseId} = req.body
        const userId = req.user.id 

        if(!rating || !courseId){
            return res.status(400).json({
                success: false , message : "Incorrect credentials"
            })
        }

        const courseDetails = await Course.findById({_id : courseId , studentEnrolled : {
            $elemMatch : {
                $eq : userId
            }
        }})

        if(!courseDetails){
            return res.status(404).json({success : false , message : "You could not review the course"})
        }

        const alreadyReviewed = await RatingAndReview.findOne({courseId , userId})

        if(alreadyReviewed){
            return res.status(403).json({
                success : false , message : "You ale\ready reviewed the course"
            })
        }

        const ratingReview = await RatingAndReview.create({
            userId , courseId , rating , review
        })

        await Course.findByIdAndUpdate({_id:courseId}, {
            $push : {
                ratingAndReviews : ratingReview._id
            } 
        }, {new:true})

        return res.status(200).json({
            success : true , message : "Rating created successfully!!" , ratingReview
        })
    } catch (error) {
        return res.status(500).json({
            success : false , message : "Issue while creating rating and review" 
        })
    }
}

exports.getAvgRating = async (req,res) =>{
    try {
        const {courseId} = req.body 

        const result = await RatingAndReview.aggregate(
            [{
                $match :{
                    course : new mongoose.Types.ObjectId(courseId)
                } 
            },
            {
                $group : {
                    _id : null,
                    avgRating : {$avg : "rating"}
                }
            }]
        )
        if(result.length > 0){
            return res.status(200).json({success:true ,averageRating : result[0].avgRating})
        }
        return res.status(200).json({success : true , message : "No rating till now" , averageRating : 0})

    } catch (error) {
        return res.status(500).json({
            success : false , message : "Issue while creating rating and review" 
        })
    }
}

exports.getAllRatingAndReviews = async(req,res)=>{
    try {
        const {courseId} = req.body
        const allRatingAndReviews = await RatingAndReview.find({
            $match : {
                $eq : {
                    course : new mongoose.Types.ObjectId(courseId)
                }
            }
        })
        .sort({rating : "desc"})
        .populate({
            path : "course" ,
            select : "courseName"
        })
        .populate({
            path : "user" ,
            select : "firstName lastName email image"
        })
        .exec()


        return res.status(200).json({success : true , message : "Rating and reviews fetched successfully" , allRatingAndReviews })
    } catch (error) {
        return res.status(500).json({
            success : false , message : "Issue while fetching rating and review" 
        })
    }
}