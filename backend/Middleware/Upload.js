const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

const uri = process.env.ATLAS_URI;

let storage = new GridFsStorage({
  url: uri,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-bezkoder-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-bezkoder-${file.originalname}`,
    };
  },
});

let uploadFile = multer({ storage: storage }).single("file");
let uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;
