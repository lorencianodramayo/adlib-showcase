const express = require("express");
const { Storage } = require("@google-cloud/storage");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

const router = express.Router();
const storage = new Storage();

const PostContent = require("../models/PostContent");

const folder = path.join(__dirname, "files");

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

// show content
router.get("/", (req, res) => {
  PostContent.find({}, (err, content) => {
    res.send(content);
  });
});

// save added content
router.post("/addContent", (req, res) => {
  const data = req.body;

  const newPostContent = new PostContent(data);

  newPostContent.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }

    return res.json({
      msg: `<strong>${req.body.title} is now created!</strong>`,
    });
  });
});

// update content
router.patch("/update", (req, res) => {});

// delete content
router.delete("/delete", (req, res) => {});

// uploader
router.post("/upload", (req, res) => {
  const form = new formidable.IncomingForm();

  form.uploadDir = folder;
  form.parse(req, (_, fields, files) => {
    console.log("\n-----------");
    console.log("Fields", fields);
    console.log("Received:", Object.keys(files));
    console.log();
    res.send("Thank you");
  });
});

module.exports = router;
