const cloudinary = require('cloudinary');
require('dotenv').config();


const cloudName = process.env.CLOUDINARY_CLOUDNAME;
const apiKey = process.env.CLOUDINARY_APIKEY;
const apiSecret = process.env.CLOUDINARY_APISECRET;

cloudinary.config({
  cloud_name: cloudName, 
  api_key: apiKey, 
  api_secret: apiSecret,
  secure: true
});

async function uploadImage (filePath) {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: 'LaQuiaquenaHerboristeria'
  })
}

module.exports = { uploadImage }
