const User = require('../models/User.js')
const Category = require('../models/Category.js')
const Course = require('../models/Course.js')
const {uploadImageToCloudinary} = require('../utils/imageUpload.js')

exports.createCourse = async (req,res) =>{
    try {
        const {courseName , courseDescription , price , whatYouWillLearn , category} = req.body
        const thumbnail = req.files.thumbnailImage

        if(!courseName || !courseDescription || !price || !whatYouWillLearn || !category || !thumbnail){
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

        const thumbnailImage = await uploadImageToCloudinary(thumbnail , process.env.FOLDER_NAME)    
        
        //create an entry for new course
        const newCourse = await Course.create({
            courseName , courseDescription , whatYouWillLearn , price , 
            instructor : instructorDetails._id , 
            category : categoryDetails._id ,
            thumbnail : thumbnailImage.secure_url
        })

        //Instructor ke courses mei ye course bhi add ho jana chahiye
        await User.findByIdAndUpdate({_id : instructorDetails._id}, {
            $push : {
                courses : newCourse._id
            }
        },{new:true})

        //Update category ka schema
        await Category.findByIdAndUpdate({_id:categoryDetails._id} , {
            $push : {
                courses : newCourse._id
            }
        })

        return res.status(200).json({success:true , message :"New Course created successfully"})
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