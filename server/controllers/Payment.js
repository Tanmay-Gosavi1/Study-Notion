const User = require('../models/User.js')
const Course = require('../models/Course.js')
const {instance} = require('../config/razorpay.js')
const mongoose = require('mongoose')
const mailSender = require('../utils/mailSender.js')

exports.capturePayment = async (req,res) => {
    const { courseId } = req.body 
    const userId = req.user.id 
    if(!courseId){
        return res.status(400).json({success : false , message : "Provide valid courseId"})
    }
    let course
    try {
        course = await Course.findById(courseId)
        if(!course){
            return res.status(400).json({success:false , message : "Course not found"})
        }
        const uid = new mongoose.Types.ObjectId(userId) ;

        if(course.studentsEnrolled.includes(uid)){
            return res.status(400).json({succes : false , message : 'Student in already enrolled in these course'})
        }
    } catch (error) {
        return res.status(500).json({success : false , message : "issue while convertng userId to object id"})
    }
    const amount = course.price
    const currency = "INR"

    const options = {
        amount : amount * 100 ,
        currency ,
        receipt : Math.random(Date.now()).toString ,
        notes :{
            courseId : course._id ,
            userId
        }
    }

    try {
        const paymentResponse = instance.orders.create(options)
        return res.status(200).json({success : true , message : "Order created",
            courseName : course.courseName,
            courseDescription : course.courseDescription,
            thumbnail : course.thumbnail,
            amount : paymentResponse.amount,
            orderId :paymentResponse.id ,
            currency : paymentResponse.currency
        })
    } catch (error) {
        return res.status(500).json({success : false , message : "issue while creating order"})
    }
}

exports.verifySignature = async (req,res)=>{
    try {
        const webhookSecret = "123456"
        const signature = req.headers["x-razorpay-signature"]
        
        //3 step process
        const shasum = crypto.createHmac("sha256" , webhookSecret) //hashed based message authentication code
        shasum.update(JSON.stringify(req.body))
        const digest =  shasum.digest("hex");

        if(signature === digest){  //Payment is authorized
            try {
                //action fulfil karo
                const {courseId , userId} = req.body.payload.payment.entity.notes

                const enrolledCourse = await Course.findByIdAndUpdate({_id : courseId} , {studentsEnrolled : userId} , {new:true})
                const enrolledStudent = await User.findByIdAndUpdate({_id : userId} , {courses : courseId} , {new:true})

                await mailSender(enrolledStudent.email , "Successfully enrolled in a course" , "Congratulation you buy the best course at the best price!!")

                return res.status(200).json({success:true , message : "Student enrolled successfully"})
            } catch (error) {
                return res.status(500).json({success : false , message : error.message})
            }
        } 
        else{
            return res.status(400).json({success:false , message : "Wrong request"})
        }  
    } catch (error) {
        return res.status(500).json({success : false , message : "issue while verifySignature order"})
    }
}

            //Razorpay Integration

//1. Razorpay ka instance tayaar kro
//2. courseId req.body se milegi 
//3. userId req.user.id se
//4. courseId ko validate
//5. course find kiya courseId se and validate
//6. check krna ki user ne pehle se same course toh buy krke toh nhi rakha
//7. instance se order create krenge 
//8. usme options likhenge which includes amount*100 , currency , receipt 

            // Next step will be signature verify 
//9. webhook secret define kro and req.headers["x-razorpay-signature"] se signature lao
//10. Three step process se use match krke dekho (shasum nikalo by cyto.createHmac("sha256" , webhookSecret) then shasum.update(JSON.stringify(req.body)) then digest nikalo by shasum.digest("hex"))
//11. if signature and digest match ho gaye then courseID and userId hum notes se leke aayenge jo hmne options likhne waqt usme pass ki thi(req.body.payload.payment.entity.notes)
//12. user ke courses mei courseid dalo and course ke studentEnrolled mei student ki userId daalo
//13. mail send kro
//14. success response
