// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/productRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", router)

mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('connected to db')
    app.listen(process.env.PORT, () => {
        console.log('Server started')
    })
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})