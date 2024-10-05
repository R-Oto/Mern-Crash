import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser());
app.use(cors());

app.use("/api/workouts", router);

mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('Connected to database');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
    process.exit(1);
})