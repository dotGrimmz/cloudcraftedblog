const mongoose = require("mongoose");
const UserDomain = require("../Domains/UserDomain");

class CloudService {
  login(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;

    UserDomain.find()
      .then((users) => {
        users.forEach((user) => {
          if (user.userName === userName && user.password === password) {
            res.status(200).send(user);
          } else if (user.userName === userName && user.password !== password) {
            res.status(401).send("incorrect credentials");
          }
        });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}

module.exports = CloudService;
