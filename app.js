import prompt from 'prompt-sync';
import _ from "lodash";

// const input=prompt();
// let length=input("Enter length of rectangle: ");
// let breadth=input("Enter breadth of rectangle: ");

// console.log("Area of rectangle is: ",length*breadth);

//! const arr=["pushpam",'raju','pushpam',1,2,3,1,3,2,4,3,'kumar','raju'];
//! const ans=_.uniq(arr);//! return unique ele of the array

//! console.log(ans);

//! console.log(_.isString("pushpam"));//? return true
//! console.log(_.isString(true));//?return false ('true' is a boolean)


//!Creating Server using Express.js
import express, { response } from 'express';
import {db} from './db.js';
import bodyParser from 'body-parser';

// db.close();
const app = express();

//parse the data and the data getting from user end using body parser
app.use(bodyParser.json()); //it store data in the "req.body";



app.get('/',(req,res)=>{
    res.send('Welcome to my hotel sir....|| What can i help you?');
})


app.get('/chicken',(req,res)=>{
    res.send("Sure Sir, I would love to serve you chicken");
})

app.get('/idli',(req,res)=>{
    const idlimenu={
        type:"plain idli",
        size:"10",
        is_chutney:true,
        is_coconut: false
    }
    // res.send(`Sure sir We have most popular idli and would love to serve idli\n my criteria: ${idlimenu}`);
    res.send(idlimenu)
})

app.post('/idli',(req,res)=>{
    res.send("hello data post");
})




import {PersonRouter} from './ExpressRouter/PersonRouter.js';
import { MenuRouter } from './ExpressRouter/MenuItemRouter.js';

app.use('/',PersonRouter);
app.use('/menu',MenuRouter)


app.listen(3000,()=>{
    console.log(`App is running on 3000`);
})