const router = require("express").Router();
const CloudService = require("../Service/CloudService.js");
const service = new CloudService();

router.route("/login").post((req, res) => {
  return service.login(req, res);
});

router.route("/create/:id").post((req, res) => {
  return service.createBlog(req, res);
});

module.exports = router;
