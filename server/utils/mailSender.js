const nodemailer = require('nodemailer')
const contactOwnerMailTemplate = require('../utils/templetes/mail.js')
require('dotenv').config()

const mailSender = async (email , title , body)=>{
    try {
        const transporter = nodemailer.createTransport({
            host : 'smtp-relay.brevo.com' ,
            port  : 587,
            auth : {
                user : process.env.SMTP_USER,
                pass : process.env.SMTP_PASS
            }
        })

        const response = await transporter.sendMail({
            from: process.env.SENDER,
            to : `${email}` ,
            subject : `${title}`,
            html : `${body}`
        })
        // console.log(response)
    } catch (error) {
        console.log("Issue while sending mail")
        console.log(error)

    }
}

module.exports = mailSender 