import mongoose from "mongoose";

// console.log(mongoose);
const url=`mongodb://localhost:27017/hotel2`;


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

