const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const multer = require("multer");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err, "did not connect");
  });

MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, client) {
  assert.equal(null, err);
  client.close();
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo database connection established successfully");
});

const CloudController = require("./Controllers/CloudController");

app.use("/ccb", CloudController);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
