const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : true,
        trim : true
    },
    lastName : {
        type: String,
        trim : true
    },
    email : {
        type: String,
        required : true,
        trim : true
    },
    phoneNo : {
        type: Number,
    },
    message : {
        type: String,
        required : true,
        trim : true
    },
})

module.exports = mongoose.model("Contact" , contactSchema) ;