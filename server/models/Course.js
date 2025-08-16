const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseName : {
        type : String ,
        required: true ,
        trim : true 
    },
    courseDescription : {
        type : String ,
        required: true ,
        trim : true 
    },
    price : {
        type : Number , 
        required : true 
    },
    instructor : 
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "User"
        },
    whatYouWillLearn : {
        type : String
    },
    tags : {
        type : [String],
        required : true
    } ,
    courseContent : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Section"
        }
    ],
    ratingAndReviews : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "RatingAndReviews"
        }
    ],
    thumbnail : {
        type : String ,
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    studentsEnrolled : [
        {
            type : mongoose.Schema.Types.ObjectId, 
            required : true ,
            ref : "User"
        }
    ] ,
    instruction : {
        type : [String]
    },
    status : {
        type : String ,
        enum : ["Draft" , "Published"]
    }
})

module.exports = mongoose.model("Course" , courseSchema) ;