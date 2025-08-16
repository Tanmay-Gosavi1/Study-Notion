const mongoose  = require('mongoose')
const Course = require('../models/Course.js')
const Profile = require('../models/Profile.js')
const User = require('../models/User.js')
const {imageUpload} = require('../utils/imageUpload.js')

exports.updateProfile = async (req,res) =>{
    try {
        const {dateOfBirth , gender , contactNumber , about} = req.body
        const id = req.user.id

        const userDetails = await User.findById(id)
        const profileId =  userDetails.additionalDetails

        const profile = await Profile.findByIdAndUpdate(profileId , {
            gender , dateOfBirth , contactNumber , about
        })

        return res.status(200).json({success : true , message : "ProfileUpdated"})
    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while updating profile "})
    }
}

exports.deleteProfile = async (req,res)=>{
    try {
        const id = req.user.id

        const userDetails = await User.findById(id)

        if(!userDetails){
            return res.status(400).json({success : false , message : "Invalid user id"})
        }

        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails})
        await User.findByIdAndDelete(id)

        return res.status(200).json({success : true , message : "Profile deleted successfully"})

    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while deleting profile "})
    }
}

exports.getAllDetailsOfUser = async (req,res) =>{
    try {
        const id = req.user.id 

        const userDetails = await User.findById(id).populate("additionalDetails").exec()

        return res.status(200).json({success : true , message : "Profile data fetched successfully" , userDetails})
    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while getting details of profile "})
    }
}

exports.getEnrolledCourses = async (req,res) =>{
    try {
        const id = req.user.id 

        const user = await User.findById(id).populate("courses").exec()
        const enrolledCourses = user.courses 

        return res.status(200).json({success : true , enrolledCourses})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false})
    }
}

exports.updateDisplayPicture = async (req,res) =>{
    try {
        const file = req.files.profilePic
        if(!file){
            return res.status(400),json({successs : false , message : "Select a photo"})
        }
        const id = req.user.id
        const profilePic = await imageUpload(file , process.env.FOLDER_NAME )

        const url = profilePic.secure_url 
        console.log(url)
        // user.image = url 
        const user = await User.findByIdAndUpdate(id , {image:url})

        return res.status(200).json({success : true , message : "Profile pic updated"})
    } catch (error) {
        return res.status(500).json({success:false , message :"Issue while updating profile pic"})
    }
}

exports.getInstructorCourses = async (req,res) =>{
    try {
        const {instructorId} = req.body

        const instructor = await User.findById(instructorId)

        if(!instructor){
            return res.status(400).json({success: false , message : "Invalid InstructorID"})
        }

        const result = await Course.find({instructor : new mongoose.Types.ObjectId(instructorId)})
        .populate("instructor")
        .populate('tags')
        .populate('courseContent')
        .populate('ratingAndReviews')
        .populate('studentsEnrolled')
        .exec()

        if(!result || result.length==0){
            console.log("No courses of these instructor")
        }
        // console.log(result)
        return res.status(200).json({success : true , message : "All courses of instructor fetched successfully", result})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false , message : "Issue while fetching courses of instructor"})
    }
}