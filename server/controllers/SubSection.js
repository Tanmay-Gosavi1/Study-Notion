const SubSection = require('../models/SubSection.js')
const Section = require('../models/Section.js')
const {imageUpload} = require('../utils/imageUpload.js')

exports.createSubSection = async (req,res) =>{
    try{
        const {title , description , duration , sectionId} = req.body

        const videoFile = req.files.videoFile

        if(!title || !description || !duration || !videoFile || !sectionId){
            return res.status(400).json({success : false , message : "Incomplete subsection's details"})
        }

        const videoFileStored = await imageUpload(videoFile , process.env.FOLDER_NAME)

        const newSubSection = await SubSection.create({
            title , description , duration , videoUrl : videoFileStored.secure_url
        })

        await Section.findByIdAndUpdate(sectionId , {
            $push :{
                subSection : newSubSection._id
            }
        } , {new:true})

        return res.status(200).json({success : true , message: "Subsection created successfully"})

    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while creating subsection"})
    }
}

exports.updateSubSection = async (req,res) =>{
    try{
        const {title , description , duration , subSectionId} = req.body

        const videoFile = req.files.videoFile

        if(!title || !description || !duration || !videoFile || !subSectionId){
            return res.status(400).json({success : false , message : "Incomplete subsection's details"})
        }

        const videoFileStored = await imageUpload(videoFile , process.env.FOLDER_NAME)

        await SubSection.findByIdAndUpdate({_id: subSectionId} , {title:title , description : description , duration : duration , videoUrl : videoFileStored.secure_url} , {new:true})

        return res.status(200).json({success : true , message: "Subsection updated successfully"})

    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while updated subsection"})
    }
}

exports.deleteSubSection = async (req,res) =>{
    try{
        const {subSectionId , sectionId} = req.body

        if(!subSectionId || !sectionId){
            return res.status(400).json({success : false , message : "Invalid credentials!!"})
        }

        await SubSection.findByIdAndDelete(subSectionId)

        await Section.findByIdAndUpdate(sectionId , {
            $pull:{
                subSection : subSectionId 
            }
        })

        return res.status(200).json({success : true , message: "Subsection deleted successfully"})

    } catch (error) {
        return res.status(500).json({success : false , message : "Issue while deleted subsection"})
    }
}