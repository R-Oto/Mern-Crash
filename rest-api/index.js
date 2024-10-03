import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('database')
    app.listen(process.env.PORT, () => {
        console.log('Server started')
    })
}).catch((err)=>{
    console.log(err)
})