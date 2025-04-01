import { v2 as cloudinary} from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({ 
    cloud_name: 'dhugs8ghz', 
    api_key: '218679451396619', 
    api_secret: 'ZFVtuPnmfErSgfRWd9paV4K1aAo' // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log('file is uploded on cloudinary', response.url);
        return response;
    }catch(e){
        fs.unlinkSync(localFilePath);
        console.log(e);
        return null;
    }
}

export {uploadOnCloudinary};


