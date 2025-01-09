import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnClouinary = async (localfilePath) => {
  try {
    if (!localfilePath) return "";

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("File uploaded successfully!!", response.url);
    return response;
  } catch (err) {
    fs.unlinkSync(localfilePath); //remove the locally saved temp file as the upload operation got failed
    return null;
  }
};

export { uploadOnClouinary };
