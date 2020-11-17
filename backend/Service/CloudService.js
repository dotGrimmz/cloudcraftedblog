const mongoose = require("mongoose");
const UserDomain = require("../Domains/UserDomain");
const BlogDomain = require("../Domains/BlogDomain");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/ccb/my-uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

class CloudService {
  imageType = ["image/jpeg", "image/png", "image/gif"];

  login(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;

    UserDomain.find()
      .then((users) => {
        users.forEach((user) => {
          if (user.userName === userName && user.password === password) {
            res.status(200).send(user);
          } else {
            res.status(401).send("incorrect credentials");
          }
        });
      })
      .catch((err) => {
        res.status(400).send(err, "this is the err");
      });
  }

  createBlog(req, res) {
    const { title, date, description, images } = req.body;
    console.log(images, "this is working");
    const blog = new BlogDomain({
      title,
      date,
      description,
    });
    // this.saveImages(images);
  }

  // saveImages(images, imageEncoded) {
  //   if (imageEncoded === null) return;
  //   let img = JSON.parse(imageEncoded);

  //   images.map((image) => {
  //     if (image === null && imageType.includes(img.type)) {
  //       BlogDomain.images = new Buffer.from(img.data, "base64");
  //     }
  //   });
  // }
}

module.exports = CloudService;
