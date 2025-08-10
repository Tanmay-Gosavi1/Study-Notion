const Profile = require('../models/Profile.js')
const User = require('../models/User.js')

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

        return res.status(200).json({success : true , message : "Profile deleted successfully"})
    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while getting details of profile "})
    }
}