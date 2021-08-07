const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const {ObjectId} = mongoose.Schema.Types
const productSchema = new Schema({
    title:{
      type: String,
      required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type: String,
        required: true
    },
    photo:{
        type:String,
        required: true
    },
    // postedBy:{
    //     type: mongoose.Schema.Types.ObjectID,
    //     ref:"User",
    //     required:true
    //  }
},{timestamps:true})

module.exports=mongoose.model('Product',productSchema)