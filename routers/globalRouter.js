const express = require("express");
const routes = require("../routes");
const globalRouter = express.Router();

const VideoControllers = require("../controllers/videoController");
const UsersControllers = require("../controllers/userController");

const join = UsersControllers.join;
const login = UsersControllers.login;
const logout = UsersControllers.logout;
const home = VideoControllers.videoHome;
const search = VideoControllers.searchVideo;
const videos = VideoControllers.videos;

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.videos, videos);

module.exports = globalRouter;
