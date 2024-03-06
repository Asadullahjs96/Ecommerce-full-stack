import express from 'express';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
import router from './Routes/index.mjs';
import dotenv from 'dotenv';
import ConnectDB from './Config/mongoDB.mjs';

const port = process.env.PORT || 3003

dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/', router);
ConnectDB();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});