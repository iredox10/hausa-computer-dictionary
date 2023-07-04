// what am adding multer for 
const cloudinary = require("cloudinary")
const cloudinaryStorage = require("multer-storage-cloudinary")
const storage = cloudinaryStorage({
  folder: "images",
  allowedFormats: ["jpg", "png"],
  transformation: [
    {
      width: 500,
      height: 500,
      crop: "limit",
    },
  ],
  cloudinary: cloudinary,
})
module.exports = multer({ storage: storage })
