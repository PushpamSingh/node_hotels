import express, { response } from 'express';
export const MenuRouter=express.Router();

import { MenuCard } from '../model/MenuCard.js';

MenuRouter.post('/',async(req,res)=>{
    try {
        const data=req.body;
        const newMenuCard=new MenuCard(data);
        const saveMenuCard=await newMenuCard.save();
        console.log("Data Saved Successfuly");
        res.status(200).json(saveMenuCard);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
MenuRouter.get('/',async(req,res)=>{
    try {
        const data=await MenuCard.find();
        console.log("Data Fetched");
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")       
    }
})

MenuRouter.get('/:tasteType',async(req,res)=>{
        try {
            const tasteType=req.params.tasteType;
            if(tasteType==='sweet' || tasteType==="sour" || tasteType==="spicy"){
            const response=await MenuCard.find({taste:tasteType});
            console.log("Data fetched");
            res.status(200).send(response);
            }else{
                res.status(404).json("Page Not Found");
            }

        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error") 
        }
})

//? update method

MenuRouter.put('/:id',async(req,res)=>{
    try {
        const perID=req.params.id;
        const data=req.body;
        const responce=await MenuCard.findByIdAndUpdate(perID,data,{
            new:true,
            runValidators:true
        })

        if(!responce){
            res.status(404).send("Item not found");
        }
        console.log("Data updated");
        res.status(200).json(responce);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
})

//? delete method

MenuRouter.delete('/:id',async(req,res)=>{
    try {
        const perID=req.params.id;
        const responce=await MenuCard.findByIdAndDelete(perID);
        if(!responce){
            res.status(404).send("Item not Found");
        }
        console.log("data deleted");
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
})