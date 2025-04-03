import { ApiError } from "../utils/apierror";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken"
import {User} from "../models/user. models"





export const verifyJwt = asyncHandler(async(req,res,next)=>{
   try{
    const token= req.cookies?.accessToken|| req.header("Authoriztion")?.replace("Bearer ","")

   if(!token){
    throw new ApiError(401,"Unauthorized request")
   }

   const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

  const user= await User.findById(decodedToken?._id).select("-password -refereshToken")

   if(!user){
    throw new ApiError(401,"Invalid Acess Token")
   }
   req.user=user;
   next()
   }catch(e){
    throw new ApiError(401,console.e?.message||"Invalid acess token")
    
   }

    
})