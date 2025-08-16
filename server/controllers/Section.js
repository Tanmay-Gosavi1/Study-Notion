const Section = require('../models/Section.js')
const Course = require('../models/Course.js')
const SubSection = require('../models/SubSection.js')

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
        const {sectionId , courseId} = req.body 

        if(!sectionId || !courseId){
            return res.status(400).json({success:false , message : "Incomplete credentials" })       
        }
        const section = await Section.findById(sectionId)

        if (!section) {
            return res.status(404).json({ success: false, message: "Section not found" });
        }

        if (Array.isArray(section.subSection) && section.subSection.length > 0) {
            await SubSection.deleteMany({ _id: { $in: section.subSection } });
        }
        
        await Section.findByIdAndDelete(sectionId)      
        
        await Course.findByIdAndUpdate(courseId , {
            $pull : {
                courseContent : sectionId
            }
        })

        return res.status(200).json({success:true , message : "Section deleted successfully!"})

    } catch (error) {
        return res.status(500).json({
            success : false , message : "Issue while deleting section"
        })
    }

    //Delete all SubSections of that section
    //Delete the section now
    //Pull that section._id from course
}