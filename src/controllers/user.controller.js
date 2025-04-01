import {asyncHandler} from "../utils/asyncHandler.js"
import{ApiError} from "../utils/apierror.js"
import {User} from "../models/user. models.js";
import {uploadOnCloudinary} from "../utils/cloudnary.js"
import { ApiResponse } from "../utils/apiresponse.js";
const registerUser = asyncHandler(async (req,res)=>{
    // get user details from frontend
    // validation - not empty;
    // check if user already exits: username, email
    // check for images, check for avatar
    // upload to them to cloudinary , avtar check
    // create user object - create entry in db 
    // reomve password and referesh token field from response 
    // check for user creation 
    // return response

    const {fullName,email,username,password}=req.body
    // console.log("emai:- ",email);

    // if(fullName=""){
    //     throw new ApiError(400,"fullName is required")
    // }

    if(
        [fullName,email,username,password].some((filed)=>
            filed?.trim()===""
        )
    ){
        throw new ApiError(400,"All fileds are required")
    }
   const existedUser =  await User.findOne({
        $or:[{email},{username}]
    })
    if(existedUser){
        throw new ApiError(409,"Username or email is already exist")
    }
    // console.log(req.files);
    const avatarLocalPath = req.files?.avatar[0]?.path;
    console.log(avatarLocalPath);
    console.log(req.files);

    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is requried")
    }
    const avatar=await uploadOnCloudinary(avatarLocalPath)
    const coverImage=await uploadOnCloudinary(coverImageLocalPath);
    if(!avatar){
        throw new ApiError(400,"Avatar file is requried")
    }
   let user=  await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url|| "",
        email,
        password,
        username:username.toLowerCase()
    })
    const creaetedUser=await User.findById(user._id).select(
        "-password -refershToken"
    )
    if(!creaetedUser){
        throw new ApiError(500,"Something went worng while resgistering user")
    }

    return res.status(201).json(
        new ApiResponse(200,creaetedUser,"User register successfully")
    )

})


export {registerUser};