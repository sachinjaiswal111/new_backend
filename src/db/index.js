import mongoose from "mongoose";

import { Db_Name } from "../constants.js";


const connectDB = async () =>{
    try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${Db_Name}`);
     console.log(`/n MongoDb connected: !! DBHOst:${connectionInstance.connection.host}`);
    //  console(connectionInstance) homework and porcess exit code

    }catch(e){
        console.log("MONGODB connection error",e)
        process.exit(1);
    }
}

export default connectDB