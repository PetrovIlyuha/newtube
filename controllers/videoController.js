import {videos} from "../db";

const videoHome = (req, res) => {
  res.render("home", { pageTitle: "Home", videos })
};
const searchVideo = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  console.log(searchingBy);
  res.render("search", { pageTitle: "Search", searchingBy });
};
const uploadVideo = (req, res) => res.render("upload", { pageTitle: "Upload" });
const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "details" });
const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

module.exports = {
  videoHome: videoHome,
  searchVideo: searchVideo,
  uploadVideo: uploadVideo,
  videoDetail: videoDetail,
  editVideo: editVideo,
  deleteVideo: deleteVideo
};
