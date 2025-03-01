import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
// console.log(mongoose);
// const url=process.env.MONGODB_LOCAL_URL;
// const url=`mongodb+srv://pushpamsingh204:Push2005@cluster0.fg4pw.mongodb.net/`

const url=process.env.MONGODB_ATLAS_URL

mongoose.connect(url,{
    // useNewUrlParser: true,
//    useUnifiedTopology: true
})

//! define db evenlistener for database connection
export const db=mongoose.connection;
// console.log(db);

db.on('connected',()=>{
    console.log("db connected");
})

db.on('error',(err)=>{
    console.log("db connection error: ",err);
    
})

db.on('disconnected',()=>{
    console.log("disconnect");
    
})

// export default db;

