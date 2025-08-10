const Section = require('../models/Section.js')
const Course = require('../models/Course.js')

exports.createSection = async (req,res) =>{
    try {
        const {sectionName , courseId} = req.body 

        if(!sectionName || !courseId){
            return res.staus(400).json({success:false , message : "Incomplete credentials" })       
        }

        const newSection = await Section.create({sectionName : sectionName})

        const updatedCourse = await Course.findByIdAndUpdate(courseId , {
            $push : {
                courseContent : newSection._id
            }
        } , {new:true})

        return res.status(200).json({success:true , message : "Section created successfully!"})

    } catch (error) {
        return res.status(500).json({
            success : false , message : "Issue while creating a section"
        })
    }
}

exports.updateSection = async (req,res) =>{
    try {
        const {sectionName , sectionId} = req.body 

        if(!sectionName || !sectionId){
            return res.staus(400).json({success:false , message : "Incomplete credentials" })       
        }

        await Section.findByIdAndUpdate(sectionId , {sectionName : sectionName} , {new:true})

        return res.status(200).json({success:true , message : "Section updated successfully!"})

    } catch (error) {
        return res.status(500).json({
            success : false , message : "Issue while updating section"
        })
    }
}

exports.deleteSection = async (req,res) =>{
    try {
        const {sectionId} = req.body 

        if(!sectionId){
            return res.staus(400).json({success:false , message : "Incomplete credentials" })       
        }

        await Section.findByIdAndDelete(sectionId)        

        return res.status(200).json({success:true , message : "Section deleted successfully!"})

    } catch (error) {
        return res.status(500).json({
            success : false , message : "Issue while deleeting section"
        })
    }
}