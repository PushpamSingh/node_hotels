import mongoose from "mongoose";

// Create Schema for a person

const personSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true,
        trim:true
    },
    phoneNo:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        enum:['chef','maneger','waiter'],
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

export const Person=mongoose.model('Person',personSchema);