import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB CONNECTED:",conn.connection.host);
    }catch(error){
        console.error("Error in connection to MONGODB:",error);
        process.exit(1); // fail
    }
}