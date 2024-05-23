
// Import Cloudinary SDK
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dmbb4pgai',
    api_key: '161621518433499',
    api_secret: 'bx8WHrSxl8vuiT_zW_r8DZSV7OQ'
});


const cloudName = "dmbb4pgai"; // Replace with your Cloudinary cloud name
const uploadPreset = "social"; // Replace with your upload preset




export const checkImage = (file) => {
    let err = "";
    if (!file) {
        return err = "File does not exist.";
    }
    // Ensure file size is less than 1 Mb
    if (file.size > 1024 * 1024) {
         return (err = "File size must be less than 1 Mb.");
    }

    // Ensure file type is either JPEG or PNG
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      return (err = "Image must be jpeg or png.");
    }

    return err;
}



// Example upload function
export const uploadImageToCloudinary = async (imageFile) => {
    try {
        const result = await cloudinary.uploader.upload(imageFile.path);
        return result;
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw error;
    }
};

// Use the upload function wherever you need to upload images

export const imageUpload = async (images) => {
    let imgArr = [];
    
    for (const item of images) {
      const formData = new FormData();
  
      formData.append("file", item);
      formData.append("upload_preset", uploadPreset);
      formData.append("cloud_name", cloudName);
  
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
      imgArr.push({ public_id: data.public_id, url: data.secure_url });
    }
    
    return imgArr;
  };