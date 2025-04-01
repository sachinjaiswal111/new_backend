
const asyncHandler = (requesHandler) =>{
    return (req,res,next)=>{
        Promise.resolve(requesHandler(req,res,next)).catch((err)=>next(err));
    }

}

export {asyncHandler};




// const asyncHandler = (fn) => async(req,res,next)=>{

// try{
//     await fn(req,res,next);

// }catch(e){
//     res.status(err.code||500).json({
//         success:false,
//         message:error.message
//     })
// }

// }