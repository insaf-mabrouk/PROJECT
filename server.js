const express = require('express')
const multer = require ('multer')
const connectDB = require('./config/connectDB')
const routerAuth = require ("./route/auth")
const path = require("path")

const cors = require("cors");


// app.use('./route/auth')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())


// app.post('/single',upload.single('image'),(req,res) => {
//   console.log(req.file)
//   res.send(`/${req.file.path}`);
// })

//connect to database
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/authentification", routerAuth)
app.use('/api/users', routerAuth)
app.use("/api/product",require('./route/product'))
app.use(express.static("./public"));


// app.use('/public/images', express.static(__dirname + '/public/images/'));

app.use((err, req, res, next) => {
  next()
  res.status(500).send({ message: err.message });
});


app.listen(port, (err) => {
  err ?console.log("can not connect to server") :console.log(`My app is running at http://localhost:${port}`)
})