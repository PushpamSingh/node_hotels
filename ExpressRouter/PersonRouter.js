import express from 'express';
export const PersonRouter=express.Router();
import { Person } from '../model/model.js';


PersonRouter.post('/person', async(req,res)=>{
    /*  const data=req.body;
   
       //create new person
       const newPerson=new Person(data);
   //    newPerson.name=data.name;
   //     newPerson.age=data.age;
   //     newPerson.salary=data.salary;
   //     newPerson.email=data.email;
   //     newPerson.phoneNo=data.phoneNo;
   
       //!save newPerson to the database
       //? no longer accepted callback function in save method
       newPerson.save((error,person)=>{
           if(error){
               console.log("Error on saving person ",error);
               res.status(500).send("Internal Server Error")
           }else{
               console.log("Successfully saved");
               res.status(200).json(person); 
           }
       })*/
   
       try {
           const data=req.body;//!Assuming that req body contain the person data
           //we creating new person of person type
           const newPerson=new Person(data);
   
           const savedData=await newPerson.save();
           console.log("data saved");
           res.status(200).json(savedData);
           
       } catch (error) {
           console.log(error);
           res.status(500).send("Internal Server error");
       }
   
   })
   
PersonRouter.get('/person',async(req,res)=>{
    try {
        const data=await Person.find();
        console.log("Data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

PersonRouter.get('/person/:workType',async(req,res)=>{
        try {
            const workType=req.params.workType; //! getting work type from parameter
            if(workType==="chef" || workType==="maneger" || workType==="waiter"){
                const responce=await Person.find({work:workType}); //! finding the person with their work type
                console.log("Data fetched successfuly");
                res.status(200).json(responce);
            }
            else{
                res.status(404).send("Person not found");
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
})

PersonRouter.put('/person/:id',async(req,res)=>{
    try {
    const personID=req.params.id;
    const data=req.body;
    const response=await Person.findByIdAndUpdate(personID,data,{
        new:true,
        runValidators:true
    });
    if(!response){
        res.status(404).send("Person Not Found");
    }
    console.log("Data updated successfuly");
    res.status(200).json(response);
    

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

PersonRouter.delete('/person/:id',async(req,res)=>{
     try {
        const personID=req.params.id;
        const responce=await Person.findByIdAndDelete(personID);
        if(!responce){
            res.status(404).send("Person not found");
        }
        console.log("data deleted");
        res.status(200).json(responce);
     } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
        
})
   