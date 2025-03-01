import mongoose from "mongoose";

const menuData=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['spicy','sweet','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredient:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

export const MenuCard=mongoose.model('MenuCard',menuData);