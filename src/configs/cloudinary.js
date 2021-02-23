const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: 'aaronsaksik',
  api_key: '465815923445859',
  api_secret: 'Bu9TZL3Cgdb3jIBbPs6DFBtJZNo',
}); 
module.exports = cloudinary;