const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{MONGODB_URI
        console.log("Database connected successfully")
    })
    .catch((err)=>{
        console.log("Issue in Db connection")
        console.log(err)
    })
}

module.exports = connectDB