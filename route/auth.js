const router = require ('express').Router()
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const User = require('../model/user')
const {RegisterRules,LoginRules,validator}= require ('../middleware/bodyValidator')
const isAuth = require('../middleware/isAuth')
const data = require ('../data')
const expressAsyncHandler = require('express-async-handler');
const { isAdmin } = require('../middleware/isAdmin');



router.get('/seed',expressAsyncHandler(async (req, res) => {
    
      const createdUsers = await User.insertMany(data.users);
      res.send({ createdUsers });
    })
  );

//inscription
router.post('/inscription',RegisterRules(), validator, expressAsyncHandler(async(req,res)=>{
 const {email, password,name,isAdmin, isArtist}=req.body
 try {
     let user = await User.findOne({email})
     if (user)
     {
         return res.status(400).send({msg:"user already used"})   
     }
   user = new User
   ({
       name,email,password,isAdmin,isArtist
   })

   const salt = 10;
   const hashedPassword = await bcrypt.hash(password, salt)
   user.password = hashedPassword

   await user.save()
   const payload ={
       id: user._id
   }
   var token = jwt.sign( payload , process.env.KEY);
   return res.status(200).send({msg:"user saved with success",user, token})
 }
  catch (error) {
     return res.status(500).send({msg: error})
 }
}))

//login
router.post('/login', LoginRules(), validator, expressAsyncHandler(async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({email})
        if (!user)
        {
           return res.status(400).send({msg:"user does not exist"})
        }
        // else if (user.password != password)
        const isEqual = await bcrypt.compare( password, user.password)
        if (!isEqual)
        {
           return res.status(400).send({msg:"bad credential"})
        }
        const payload ={
            id: user._id
        }
        var token = jwt.sign( payload , process.env.KEY);
        
        res.status(200).send({msg:"login with success", user,token})
       
    } catch (error) {
        return res.status(500).send({msg: "error server"})
    }
}))

//auth
router.get("/isMe", isAuth, (req,res)=>{
    res.status(200).send({user:req.user})
})

//get list users
router.get('/', expressAsyncHandler(async (req, res) => {
      const users = await User.find({});
      res.send(users);
    })
  );

  //REQUEST FIND PRODUCT BY ID AND DELETE
  router.delete('/deleteuser/:id',expressAsyncHandler(async(req,res)=>{
    
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json('The user is deleted successfully'))
    .catch((error)=>res.status(400).res.json(`Error: ${error}`))
}))


//REQUEST FIND PRODUCT BY ID AND UPDATE
router.put('/updateuser/:id',expressAsyncHandler(async(req,res)=>{ 
  User.findById(req.params.id)
  .then((product)=>{
    user.name = req.body.name,
    user.email=req.body.email,
    user.isAdmin=Boolean(req.body.isAdmin),
    user.isArtist=Boolean(req.body.isArtist)

    
  .save()
  .then(()=>res.json('the user is updated successfully'))
  .catch((error)=> res.status(400).json(`error : ${err}`))
  })
  .catch((error)=> res.status(400).json(`error : ${err}`))
  
}))

//get user by id
router.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );
module.exports= router