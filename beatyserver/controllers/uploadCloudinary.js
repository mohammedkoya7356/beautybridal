import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      { folder: "book_cards" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result.secure_url);
      }
    );

    streamifier.createReadStream(buffer).pipe(upload);
  });
};
