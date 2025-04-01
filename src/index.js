// require('dotenv').config()

// // import dotenv from "dotenv"
import dotenv from 'dotenv';
dotenv.config();

import express from "express"   

import connectDB from "./db/index.js";

// const app = new express();

import {app} from "./app.js"
// dotenv.config({
//     path:'./env'
// })

connectDB()
.then(
    app.listen(process.env.PORT||7000,()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })

).catch((err)=>{
    console.log(err);
})








// const app = express()

// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${Db_Name}`)
//         app.on("error",(error)=>{
//             console.log("Error: ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     }catch(e){
//         console.log("Error",e);
//         throw err
        
//     }
// })()