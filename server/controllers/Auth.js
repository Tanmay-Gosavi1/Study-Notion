const User = require("../models/User.js");
const OTP = require("../models/OTP.js");
const Profile = require("../models/Profile.js");
const otpGenerator = require("otp-generator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const mailSender = require("../utils/mailSender.js");
require('dotenv').config()

//send OTP
const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "user already exists" });
    }

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let isOtpExists = await OTP.findOne({ otp: otp });

    while (isOtpExists) {
      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });

      isOtpExists = await OTP.findOne({ otp: otp });
    }

    const newOTP = new OTP({
      email,
      otp: otp,
    });

    await newOTP.save();

    await mailSender(email , "Verify OTP" , `OTP is ${otp}`)

    return res
      .status(200)
      .json({ success: true, message: "OTP send successfully" , otp});
  } catch (error) {
    return res.status(500).json({success:false , message : error.message})
  }
};

//signup
const signup = async (req, res) => {
    //Data fetch and validate
    const {firstName , lastName , email , password , confirmPassword , accountType, otp} = req.body
    if(!firstName || !lastName || !email || !password || !confirmPassword || !accountType || !otp){
        return res.status(400).json({success:false , message : "Incomplete credentials"})
    }

    try {
        //password match
        if(password!==confirmPassword){
            return res
            .status(400)
            .json({ success: false, message: "passwords not match to each other " });
        }

        //Check existing user
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res
            .status(401)
            .json({ success: false, message: "User already exists" });
        }
        //find OTP
        const recentOtp = await OTP.findOne({email}).sort({createdAt:-1}).limit(1)
        //OTP verification
        if(!recentOtp){
            return res.status(400).json({
                success : false ,
                message : "OTP not Found"
            })
        }
        
        else if(otp !== recentOtp.otp){
            return res.status(400).json({
                success : false ,
                message : "Invalid OTP"
            })
        } 

        //Password hash
        const hashedPassword = await bcrypt.hash(password , 10)
         
        //DB mein entry
        const profileDetails = await Profile.create({
            gender : null ,
            contactNumber : null ,
            dateOfBirth : null ,
            about : null
        })

        const newUser = new User({
            firstName , lastName  , email , password : hashedPassword , accountType ,
            additionalDetails : profileDetails._id ,
            image : `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        })
        await newUser.save()

        //Success response
        return res.status(200).json({success: true , message : "New User created successfully"})
    } 
    catch (error) {
        console.log("Issue while signup")
        return res.status(500).json({success:false , message : error.message})
    }
};

//login
const login = async (req,res)=>{
    const {email , password} = req.body ;
    if(!email || !password){
        return res.ststus(400).json({success:false , message : "Incomplete credentials!"})
    }

    try{
        const user = await User.findOne({email}).populate("additionalDetails")

        if(!user){
            return res.status(401).json({success:false , message : "User not registered!"})
        }

        const isMatch = await bcrypt.compare(password , user.password)

        if(!isMatch){
            return res.status(400).json({
                success : false ,
                message : "Incorrect Email or Password"
            })
        }

        let token = jwt.sign({id : user._id , accountType : user.accountType} , process.env.JWT_SECRET , {expiresIn : '7d'})

        const response = res.cookie("token" , token  , {
            httpOnly : true ,
            secure : process.env.NODE_ENV === 'production' ,
            sameSite : "strict" ,
            maxAge : 7*24*60*60*1000
        })

        return res.status(200).json({success:true , message : "Logged In Successfully!"})
    }
    catch(err){
        return res.status(500).json({success :false, message : err.message})
    }
}

//logout
const logout = async (req,res)=>{
    return await res.clearCookie({
        httpOnly : true ,
        secure : process.env.NODE_ENV === 'production' ,
        sameSite : "strict" ,
        maxAge : 7*24*60*60*1000
    })
}

//changePassword
const changePassword  = async (req,res) =>{
    try {
        //Get data from req.body
        const {oldPassword,newPassword , confirmNewPassword} = req.body 

        //Validation
        if(newPassword !== confirmNewPassword){
            return res.status(401).json({success:false , message : "Passwords not match"})
        }
        // console.log("hii")

        //find user
        const user = await User.findById(req.user.id)
        // console.log(user)
        if(!user){
            return res.status(400).json({success : false , message : "User not found"})
        }

        //old password check
        const isMatch = await bcrypt.compare(oldPassword , user.password)
        if(!isMatch){
            return res.status(403).json({success : false , message : "Old password is incorrect"})
        }
        //Update password in databse
        const hashedPassword = await bcrypt.hash(newPassword , 10)
        user.password = hashedPassword
        await user.save() 
        //send mail
        await mailSender(user.email , "Password changed successfully at StudyNotion" , "Your password was changed on StudyNotion. If this was not you, reset your password immediately")
        //success response
        return res.status(200).json({success: true , message : "Password changed successfully"})

    } catch (error) {
        return res.status(500).json({success:false , message : "Issue occur while changing password"})
    }
}

module.exports = { sendOTP  , signup , login , logout , changePassword};
