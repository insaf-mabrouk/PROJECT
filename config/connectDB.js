const mongoose=require("mongoose")

require ('dotenv').config({path:'./config/.env'})

const connectDB = async ()=>{
 try {
    await mongoose.connect(process.env.MONGO_URI ||'mongodb://localhost:27017/Artzone',{ useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true})
    console.log("database is connected")
 } catch (error) {
     console.log(error,"error connection to database")
 }
}

module.exports=connectDB