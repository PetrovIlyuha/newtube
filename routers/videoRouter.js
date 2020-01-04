const express = require("express");
const routes =  require('../routes');

const VideoControllers = require("../controllers/videoController");
// const videos = VideoControllers.videos;
const getUpload = VideoControllers.getUpload;
const postUpload = VideoControllers.postUpload;
const videoDetail = VideoControllers.videoDetail;
const editVideo = VideoControllers.editVideo;
const deleteVideo = VideoControllers.deleteVideo;

const videoRouter = express.Router();

// videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

module.exports = videoRouter;
