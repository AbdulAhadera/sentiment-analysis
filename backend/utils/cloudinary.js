import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({
    cloud_name: 'ddmxpjosk',  // yeh sab env variable mein rkhayege
    api_key: '494183635338429', // yeh sab env variable mein rkhayege
    api_secret: 'PpTj-5tPLZXUKpyxUXb_GK3ihdc' // yeh sab env variable mein rkhayege
});


const uploadOnCloudinary = async (localPath) => {

    try {
        if (!localPath) return null

        // upload file on cloudinary
        const res = await cloudinary.uploader.upload(localPath, {
            resource_type: "auto"
        });
        // file uploaded succesfully
        console.log(`file uploaded on cloudinary and url : ${res.url}`)
        return res;
    } catch (error) {

        fs.unlink(localPath)
        // removed the locally saved temporary file as the ipload operation got failed
        return null

    }

}

export { uploadOnCloudinary };