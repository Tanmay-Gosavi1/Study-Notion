const mongoose = require('mongoose')

const subSectionSchema = new mongoose.Schema({
    title :{
        type:String,
        required : true , 
        trim : true
    },
    description :{
        type : String ,
        trim : true
    },
    timeDuration :{
        type : String , 
    },
    videoUrl:{
        type : String
    }
})

module.exports = mongoose.model("SubSection" , subSectionSchema) ;