const Category = require('../models/Category.js')

exports.createCategory = async (req,res) =>{
    try{
        const {name , description} = req.body

        if(!name || !description){
            return res.status(400).json({success:false , message : "Incomplete credentials"})
        }

        const categoryDetails = Category.create({
            name , description
        })

        return res.status(200).json({success:true , message : "New category created successfully"})

    }
    catch(err){
        return res.status(500).json({success:false , message : "Error while creating category"})
    }
}

exports.showAllCategory = async (req,res)=>{
    try {
        const allcategory = await Category.find({}, {name : true , description : true})
        return res.status(200).json({success:true , message : "All category are here" , allcategory})
    } catch (error) {
        return res.status(500).json({success:false , message : "Error while creating category"})
    }
}