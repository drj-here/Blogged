import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import postRoute from './routes/post.route.js'
import cookieParser from 'cookie-parser';
dotenv.config();

const app=express()
app.use(express.json())
app.use(cookieParser);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB is connected')
})
.catch((err)=>{
    console.log(err.message)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server started on Port ${process.env.PORT}`)
})

app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)
app.use('/api/post',postRoute) 
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal server error'
    res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})