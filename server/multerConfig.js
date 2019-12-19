const multer = require('multer');
const cloudinary = require('cloudinary').v2;


require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
// eslint-disable-next-line no-console
console.log('** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **');
exports.uploads = (file) => new Promise((resolve) => {
  cloudinary.uploader.upload(file, (result) => {
    resolve({ url: result.url, id: result.public_id });
  }, { resource_type: 'auto' });
});


// multer.diskStorage() creates a storage space for storing files.
const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, './files/images/');
    } else {
      cb({ message: 'this file is neither a video or image file' }, false);
    }
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
module.exports = upload;
