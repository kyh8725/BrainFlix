const express = require("express");
const helper = require("../../helper/helper");
const router = express.Router();
const videoFile = __dirname + "/../../models/mainVideo.json";
const videos = require(videoFile);

router.get("/", (req, res) => {
  const videoLists = videos.map(video => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image
    };
  });
  res.send(videoLists);
});

router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    channel: "Dainel Kim",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
    description: req.body.description,
    name: "Daniel Kim",
    timestamp: new Date().getTime(),
    views: 0,
    likes: 0,
    duration: "5:00",
    video: "https://project-2-api.herokuapp.com/stream",
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

router.get("/:id", (req, res) => {
  const found = videos.some(video => {
    return video.id === req.params.id;
  });
  if (found) {
    res.json(videos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
