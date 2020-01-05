const routes = require("../routes");

const videoHome = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
const searchVideo = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  res.redirect(routes.videoDetail(12));
  //  TODO: upload and save video
};

const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "details" });
const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

module.exports = {
  videoHome: videoHome,
  searchVideo: searchVideo,
  getUpload: getUpload,
  postUpload: postUpload,
  videoDetail: videoDetail,
  editVideo: editVideo,
  deleteVideo: deleteVideo
};
