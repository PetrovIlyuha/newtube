const videoHome = (req, res) => res.render("home");
const searchVideo = (req, res) => res.send("Search");
const videos = (req, res) => res.send("videos");
const uploadVideo = (req, res) => res.send("upload");
const videoDetail = (req, res) => res.send("videoDetail");
const editVideo = (req, res) => res.send("editVideo");
const deleteVideo = (req, res) => res.send("deleteVideo");

module.exports = {
  videoHome: videoHome,
  searchVideo: searchVideo,
  videos: videos,
  uploadVideo: uploadVideo,
  videoDetail: videoDetail,
  editVideo: editVideo,
  deleteVideo: deleteVideo
};
