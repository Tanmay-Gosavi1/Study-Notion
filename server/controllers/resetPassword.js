const User = require('../models/User.js')
const mailSender  = require('../utils/mailSender.js')

//resetPasswordToken 
exports.resetPasswordToken = async (req,res) =>{
    try {
        //Get email fomr req.body
        const {email} = req.body

        //check email validation
        const user = await User.findOne({email : email})
        if(!user){
            return res.json({success:false , message : "Your email is not registered"})
        }
        
        //generate token
        const token = crypto.randomUUID()

        //Update  user by adding token and expiratin time
        const updatedDetails = await User.findOneAndUpdate({email : email} , {
            token : token ,
            resetPasswordExpires : Date.now() + 15*60*1000
        },{new:true})

        //create url
        const url = `http://localhost:3000/update-password/${token}`

        //Send Mail
        await mailSender(email , "Reset Password on Study Notion" , `Password Reset Link : ${url}  which only balid for next 15mins`)

        //success response
        return res.status(200).json({
            success: true ,
            message : "Email sent successfuly, please check mail and reset password"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "Something went wrong while sending you mail"
        })
    }
}


//resetPassword
exports.resetPassword = async(req,res)=>{
    try {
        //data fetch
        const {password , confirmPassword , token} = req.body

        //validation
        if(!password || !confirmPassword || !token){
            return res.status(400).json({success:false , message:"Incomplete credentials"})
        }

        if(password !== confirmPassword){
            return res.status(400).json({success:false , message:"Passwords do not match"})
        }
        
        const user = await User.findOne({token})

        if(!user){
            return res.status(400).json({success:false , message:"User not found"})
        }
        //get userdetails from db using token
        if(!user.resetPasswordExpires || user.resetPasswordExpires < Date.now()){
            return res.status(400).json({success:false , message:"Retry the reset password process"})
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password  , 10)

        //password update
        user.password = hashedPassword
        user.token = undefined
        user.resetPasswordExpires = undefined
        user.save()

        //mail send
        await mailSender(user.email , "Password changed successfully at StudyNotion" , "Your password was changed on StudyNotion. If this was not you, reset your password immediately")

        //success response
        return res.status(200).json({success:true , message:"Password changed successfully"})

    } catch (error) {
        return res.status(500).json({success:false , message:error.message})
    }
}