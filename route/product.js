const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const productRouter = express.Router()
const mongoose = require('mongoose')
const isAuth= require ('../middleware/isAuth')
const multer = require ('multer')
const Product = require ('../model/product')
const data= require('../data') 
const isAdmin = require('../middleware/isAdmin')
const isArtist = require('../middleware/isArtist')
const  isArtistOrAdmin  = require('../middleware/isAdminOrArtist')
const User =require ("../model/user")



const storage = multer.diskStorage({

  destination: (req,file,cb) => 
  {cb(null, './client/public/uploads/')},
  filename: (req, file, cb) =>{
cb(null, file.originalname);}})

const upload = multer({storage:storage})


   
productRouter.get(
  '/seed',
 (async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);


//test
productRouter.get('/test', (req, res) => {
    res.send('Hello World!')
  })

// request to add a new article
  // productRouter.post('/postproduct',(req,res)=>{
  //     const newProduct= new Product({
  //       title:req.body.title,
  //       category: req.body.category,
  //       price:req.body.price,
  //       photo:req.body.photo
        
  //     })
  //     newProduct.save()
  //     .then(()=>res.json("the new product added successfully"))
  //     .catch((error)=>res.status(400).json (`error:${error}`))
  // })

  productRouter.post('/postproduct',upload.single("photo"),expressAsyncHandler(async(req,res)=>{
    const newProduct= new Product({
      title:req.body.title,
      category: req.body.category,
      price:req.body.price,
      photo:req.file.originalname
    })
    newProduct.save()
    .then(()=>res.json("the new product added successfully"))
      .catch((error)=>res.status(400).json (`error:${error}`))
}))

//REQUEST FIND PRODUCT BY ID
  productRouter.get('/product/:id', (req, res) => {
    Product.findById (req.params.id)
    
    .then(product=>res.json(product))
    .catch((error)=>res.status(400).res.json(`Error: ${error}`))
  
  });

//get all the products
  productRouter.get('/',(req,res)=>{
    Product.find({})
    .then(product=>res.json(product))
    .catch((error)=>res.status(400).res.json(`Error: ${error}`))
})


 //REQUEST FIND PRODUCT BY ID AND DELETE
  productRouter.delete('/deleteproduct/:id',expressAsyncHandler(async(req,res,next)=>{
    
      Product.findByIdAndDelete(req.params.id)
      .then(()=>res.json('The article is deleted successfully'))
      .catch((error)=>res.status(400).res.json(`Error: ${error}`))
  }))


  //REQUEST FIND PRODUCT BY ID AND UPDATE
  productRouter.put('/updateproduct/:_id',expressAsyncHandler(async(req,res)=>{ 
    const {_id} = req.params
    const {title, category, price, photo} =req.body 
    Product.findOneAndUpdate({_id}, {$set:{title,category,price,photo}})
    .then((product)=>res.send(product))
    .catch((error)=> console.log(error))
  }))

// router.put("/updateuser/:_id", (req,res)=>{
//   const {_id} = req.params
//   const {name, email, phone} =req.body
//   Contact.findOneAndUpdate({_id}, {$set:{name, email,phone}})
//   .then(contact => res.send(contact))
//   .catch((error)=>console.log(error))

// })
 

  // productRouter.put('/updateproduct/:id',upload.single("productName"),(req,res)=>{ 
  //     Product.findById(req.params.id)
  //     .then((product)=>{
  //       product.title = req.body.title,
  //       product.category=req.body.category,
  //       product.price=req.body.price
  //       product.photo=req.file.originalname

  //       product
  //     .save()
  //     .then(()=>res.json('article updated'))
        //  .catch((error)=> res.status(400).json(`error : ${err}`))
  //     })
  //     .catch((error)=> res.status(400).json(`error : ${err}`))
  // })


// productRouter.post('/postproduct',isAuth,expressAsyncHandler(async(req,res)=>{
//     const {title,category,price} = req.body
//     if(!title || !category || !price){
//         return res.status(422).json({error:"please add all fields"})
//     } 
//     // console.log(req.user)
//     // res.send("ok")
    
//     const product = new Product ({
//         title:req.body.title,
//         category:req.body.category,
//         price:req.body.price,
//         // postedBy:req.user._id
//     })
//     console.log(user)
//     const createdProduct = await product.save();
//     res.status(201).send({ message: 'new product Created', product: createdProduct });
//  }))

//  productRouter.get('/allproducts',(req,res)=>{
//     Product.find()
//     .populate("postedBy")
//     .then(products=>{
//         res.json({products})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })



// router.get('/myproduct',isAuth,(req,res)=>{
//     Product.find({postedBy:req.user._id})
//     .populate("postedBy","_id name")
//     .then(myproduct=>{
//         res.json({myproduct})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })


module.exports = productRouter
