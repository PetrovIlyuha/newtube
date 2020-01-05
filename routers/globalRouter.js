const express = require("express");
const routes = require("../routes");
const globalRouter = express.Router();

const VideoControllers = require("../controllers/videoController");
const UsersControllers = require("../controllers/userController");

const getJoin = UsersControllers.getJoin;
const postJoin = UsersControllers.postJoin;
const getLogin = UsersControllers.getLogin;
const postLogin = UsersControllers.postLogin;
const logout = UsersControllers.logout;
const home = VideoControllers.videoHome;
const search = VideoControllers.searchVideo;
// const videos = VideoControllers.videos;

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.login, getLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);
// globalRouter.get(routes.videos, videos);

module.exports = globalRouter;
