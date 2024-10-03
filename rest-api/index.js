import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/route.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use('/api', router)

mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('database')
    app.listen(process.env.PORT, () => {
        console.log('Server started')
    })
}).catch((err)=>{
    console.log(err)
})