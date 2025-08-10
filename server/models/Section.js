const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({
    sectionName : String ,
    subSection : [
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "SubSection"
        }
    ]
})

module.exports = mongoose.model("Section" , sectionSchema) ;