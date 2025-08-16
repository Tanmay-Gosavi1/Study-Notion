const Contact = require('../models/Contact.js')
const mailSender = require('../utils/mailSender.js')

exports.contact = async (req,res)=>{
    try {
        const {firstName , lastName , email , phoneNo , message} = req.body 
        if(!firstName || !email || !message){
            return res.status(400).json({success: false , message : "Fill all details"})
        }
        const userDetails = Contact.create({
            firstName : firstName ,
            lastName : lastName ,
            email : email ,
            message : message ,
            phoneNo : phoneNo
        })

        mailSender("work.tanmayy@gmail.com" , "New user filled a contact form" , `These are details : ${firstName} ${lastName?lastName:""} , email : ${email}  Message : ${message}`)
        mailSender( email, "Form filled successfully" , "Thankyou for reaching us out !!" )

        return res.status(200).json({success: true , message : "contacted info saved successfully"})

    } catch (error) {
        return res.status(500).json({success :false , message : "Issue while storing contactted details"})
    }
}