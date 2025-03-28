// require('dotenv').config()

// // import dotenv from "dotenv"
import dotenv from 'dotenv';
dotenv.config();

import express from "express"   

import connectDB from "./db/index.js";

// dotenv.config({
//     path:'./env'
// })

connectDB();








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