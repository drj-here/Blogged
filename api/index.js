import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

const app=express()

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