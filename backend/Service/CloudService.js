const mongoose = require("mongoose");
const UserDomain = require("../Domains/UserDomain");
const BlogDomain = require("../Domains/BlogDomain");
const upload = require("../Middleware/Upload");
const AAMDomain = require("../Domains/ApexAutoMoversDomain");
const path = require("path");
const distance = require("google-distance-matrix");
distance.key("AIzaSyDZztUmOUlMh9YRZTEQ3jkJeTCt8tt0AYw");
distance.units("imperial");
distance.avoid("tolls");
distance.mode("driving");

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

  // the answers are in multer.. you need to figure out
  // how to configure the destination.. which is our mongo database

  createBlog(req, res) {
    console.log(req.body);
    const { title, date, description } = req.body;

    const user = req.params.id;
    // console.log(req, "this is the body from the backend service");
    // res.sendFile(path.join(`${__dirname}/../views/index.html`));
    // console.log(path, "this is the path from the backend");

    new BlogDomain({
      title,
      date,
      description,
      user,
    })
      .save()
      .then(() => {
        res.send(req.body);
      });
    // this.saveImages(images);
  }

  getAllBlogs(req, res) {
    BlogDomain.find().then((posts) => {
      res.send(posts);
    });
  }

  calculateDistance(req, res) {
    let origins = [req.body.origin];
    let destinations = [req.body.destination];

    distance.matrix(origins, destinations, (err, distances) => {
      if (err) {
        return console.error(err);
      }
      if (!distances) {
        return res.send("NO DISTANCES");
      }

      if (distances.status == "OK") {
        let travelData = {
          distance: distances.rows[0].elements[0].distance.text,
          duration: distances.rows[0].elements[0].duration.text,
        };
        res.send(travelData);
      }
    });
  }
}

module.exports = CloudService;
