const express = require('express')
const app = express()
const ngrok =require('@ngrok/ngrok')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

const { initializeApp } = require("firebase/app");

firebaseConfig = {
    apiKey: "AIzaSyB7f-7QP4AsaYbXvMXTIcax2ELuPzoqRe0",
    authDomain: "test-26d1f.firebaseapp.com",
    projectId: "test-26d1f",
    storageBucket: "test-26d1f.appspot.com",
    messagingSenderId: "800130469133",
    appId: "1:800130469133:web:8a25b49016b172d91e3444"
  };

const firebaseApp = initializeApp(firebaseConfig);

mongoose.connect(process.env.DB_URL)
    .then(()=>console.log('connected'))
    .catch((err)=>console.log(err.message))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

const addProductRoute = require('./routes/addProductRoute')
const getProductRoute = require('./routes/getProductRoute')
const getProductDetailsRoute = require('./routes/getProductDetailsRoute')
const deleteProductRoute = require('./routes/deleteProductRoute')
const uploadImageRoute = require('./routes/uploadImageRoute')
const updateProductRoute = require('./routes/updateProductRoute')
const loginRoute = require('./routes/loginRoute')
const registerRoute = require('./routes/registerRoute')
const authUser = require('./middleware/authenticateUser')

app.post('/login',loginRoute)
app.post('/register',registerRoute)
app.post('/addProduct',addProductRoute)
app.post('/uploadImage',uploadImageRoute)
app.get('/getProducts',authUser,getProductRoute)
app.get('/productDetails/:id',getProductDetailsRoute)
app.delete('/deleteProduct/:id',deleteProductRoute)
app.put('/updateProduct/:id',updateProductRoute)

app.listen(process.env.PORT,(()=>{
    console.log(process.env.PORT)
}))