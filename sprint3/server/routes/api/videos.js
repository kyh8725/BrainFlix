const express = require("express");

const videoFile = __dirname + "/../../models/videoList.json";
const videos = require(videoFile);

const helper = require("../../helper/helper");

const router = express.Router();

router
  .get("/", (req, res) => {
    res.send("get videos");
  })
  .post("/", (req, res) => {
    console.log(req.body);
    const newVideo = {
      title: req.body.title,
      channel: "Dainel Kim",
      image: "https://i.imgur.com/l2Xfgpl.jpg",
      description: "1111",
      name: "Daniel Kim",
      timestamp: new Date().getTime(),
      views: 0,
      likes: 0,
      comments: []
    };
    if (!newVideo.title || !newVideo.description) {
      return res.status(400).json({
        errorMessage: "Please provide video title and description"
      });
    }
    videos.push(newVideo);
    helper.writeJSONFile(videoFile, videos);
    res.json(videos);
  });

module.exports = router;
