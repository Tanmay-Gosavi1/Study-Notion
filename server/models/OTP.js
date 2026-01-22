const mongoose = require('mongoose')
const mailSender = require('../utils/mailSender.js')
const emailVerificationTemplate = require('../mail_templates/emailVerification.js')

const OTPSchema = new mongoose.Schema({
    email : {
        type : String ,
        required : true
    },
    otp : {
        type : String ,
        required : true
    },
    createdAt : {
        type : Date ,
        default : Date.now,
        expires : 5*60
    }
})

async function sendVerificationEmail(email, otp) {
    try {
        const htmlContent = emailVerificationTemplate(otp)
        const mailResponse = await mailSender(email, "Verify Your Email - StudyNotion", htmlContent)
        console.log("OTP Email sent successfully to:", email)
        return mailResponse
    } catch (error) {
        console.log("Error while sending OTP email:", error.message)
        throw error
    }
}

// Pre Middleware - fixed typo (removed extra space after "save")
OTPSchema.pre("save", async function(next) {
    // Only send email if this is a new document
    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp)
    }
    next()
})

module.exports = mongoose.model("OTP", OTPSchema)