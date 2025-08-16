const User = require('../models/User.js')
const Category = require('../models/Category.js')
const Course = require('../models/Course.js')
const {imageUpload} = require('../utils/imageUpload.js')

exports.createCourse = async (req,res) =>{
    try {
        const {courseName , courseDescription , price , whatYouWillLearn , category , tags , instruction} = req.body
        const thumbnail = req.files.thumbnail

        if(!courseName || !courseDescription || !price || !whatYouWillLearn || !category || !thumbnail || !tags || !instruction){
            return res.status(400).json({success : false , message:"All fields are required"})
        }

        //check instructor
        const userId = req.user.id 

        const instructorDetails = await User.findById(userId)
        if(!instructorDetails){
            return res.status(403).json({success : false , message : "Instructor details not found"})
        }

        //check category
        const categoryDetails = await Category.findById(category)
        if(!categoryDetails){
            return res.status(403).json({success : false , message : "Category details not found"})
        }
        // console.log("Hii")
        const thumbnailImage = await imageUpload(thumbnail , process.env.FOLDER_NAME)    
        // console.log("Hii")
        //create an entry for new course
        const newCourse = await Course.create({
            courseName , courseDescription , whatYouWillLearn , price , 
            instructor : instructorDetails._id , 
            category : categoryDetails._id ,
            thumbnail : thumbnailImage.secure_url
        })
        // console.log("Hii")
        //Instructor ke courses mei ye course bhi add ho jana chahiye
        await User.findByIdAndUpdate({_id : instructorDetails._id}, {
            $push : {
                courses : newCourse._id
            }
        },{new:true})
        // console.log("Hii")
        //Update category ka schema
        await Category.findByIdAndUpdate({_id:categoryDetails._id} , {
            $push : {
                courses : newCourse._id
            }
        })
        // console.log("Hii")
        return res.status(200).json({success:true , message :"New Course created successfully" , newCourse})
    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while creating a course"})
    }
}

exports.showAllCourses = async (req,res) =>{
    try {
        const allCourses = await Course.find({} , {courseName : true ,price : true ,whatYouWillLearn : true })
        return res.status(200).json({success:true , message : "All courses data fetched successfully", data : allCourses })
        
    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while showing all course"})
    }
}

exports.courseDetails = async (req,res) =>{
    try {
        const {courseId} = req.body ;

        if(!courseId){
            return res.status(400).json({success : false , message : "Fill courseId"})
        }
        const course = await Course.findById(courseId)
            .populate({
                path : "courseContent",
                populate:{
                    path : "subSection"
                }
            })
            .populate({
                path : "instructor"
            })
            .populate("ratingAndReviews")
            .populate("category")
            .populate("studentsEnrolled")
            .exec()

        if(!course){
            return res.status(500).json({success : false , message : "Invalid courseId"})
        }

        return res.status(200).json({success : true , message : "Course details fetched successfuly" , course})
    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while fetching course data"})
    }
}

exports.editCourse = async (req,res) =>{
    try {
        const {courseName , courseDescription , price , whatYouWillLearn , categoryId , tags , instruction , courseId } = req.body
        const thumbnail = req.files.thumbnail

        if(!courseName || !courseDescription || !price || !whatYouWillLearn || !categoryId || !thumbnail || !tags || !instruction || !courseId ){
            return res.status(400).json({success : false , message:"All fields are required"})
        }

        const course = await Course.findById(courseId)
        if(!course){
            return res.status(400).json({success:false , message : "Invalid courseId"})
        }

        const thumbnailImage = await imageUpload(thumbnail , process.env.FOLDER_NAME)

        await Course.findByIdAndUpdate(courseId , {
            courseName , courseDescription , price , whatYouWillLearn  , tags , instruction , thumbnail : thumbnailImage.secure_url , category : categoryId
        })

        return res.status(200).json({success : true , message : "Course Updated Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message :"Issue while updating course"})
    }
}
