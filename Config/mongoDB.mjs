import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const ConnectDB = async ()=>{
    try {
        const onnectDB = await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED");
    } catch (error) {
        console.log("MongoDB error:", error);
    }
};

export default ConnectDB