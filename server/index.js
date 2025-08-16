const express = require('express')
const app = express()
require('dotenv').config()
const cloudinary = require('./config/cloudinary.js')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRoutes = require('./routes/User')
const profileRoutes = require('./routes/Profile')
const paymentRoutes = require('./routes/Payment')
const courseRoutes = require('./routes/Course')
const categoryRoutes = require('./routes/Category.js')
const contactRoutes = require('./routes/Contact.js')
const ratingAndReviewsRoutes = require('./routes/RatingAndReviews.js')
const connectDB = require('./config/db.js')

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(fileUpload({useTempFiles : true ,tempFileDir: '/tmp/'}))
app.use(cors ({
    origin : "http://localhost:3000" ,
    credentials : true
}))

//Route Mounting 
app.use('/api/v1/auth' , userRoutes)
app.use('/api/v1/profile' , profileRoutes)
app.use('/api/v1/course' , courseRoutes)
app.use('/api/v1/payment' , paymentRoutes)
app.use('/api/v1/category' , categoryRoutes)
app.use('/api/v1/contact' , contactRoutes)
app.use('/api/v1/ratingAndReviews' , ratingAndReviewsRoutes)

//Db connection
connectDB()

//Cloudinary connection
cloudinary()

//Default route
app.get('/',(req,res)=>{
    return res.json({
        success:true ,
        message : "Your server is running .."
    })
})

//Server listen
const port = process.env.PORT || 4001
app.listen(port , ()=>{
    console.log(`App is listening at ${port}`)
})