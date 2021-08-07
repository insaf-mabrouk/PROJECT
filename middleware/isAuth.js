// var jwt = require('jsonwebtoken')
// const User = require('../model/User')

// module.exports = async (req,res,next)=>{
//     try {
//         const token =req.headers['autorization']
//         if (!token){
//             return res.status(400).send({msg:"unauthorized"})
//         }
//         const decoded = await jwt.verify(token, process.env.KEY);
//         const user = await User.findById(decoded.id).select("-password")
//         if(!user){
//             return res.status(400).send({msg:"unauthorized"})
//         }
//         req.user=user
//         next()
//     } catch (error) {
//         return res.status(400).send({msg:"unauthorized"})
//     }
// }

// const {KEY} = require('../config')

const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model("User")

const isAuth = (req,res,next)=>{
    
    const authorization = req.headers['autorization']
    //authorization === Bearer ewefwegwrherhe
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
    // const token = authorization.replace("Bearer ","")
    const token=authorization.slice(7,authorization.length)
    
    jwt.verify(token, process.env.KEY,(err,decode)=>{
        if(err){
         return   res.status(401).send({message:"invalid token"})
        }
        else{
        req.user = decode
        next()
    }
}
    )
} 
module.exports = isAuth
