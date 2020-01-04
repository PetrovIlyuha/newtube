const express = require("express");
const routes = require("../routes");
const UsersControllers = require("../controllers/userController");

// const users = UsersControllers.users;
const userDetail = UsersControllers.userDetail;
const editProfile = UsersControllers.editProfile;
const changePassword = UsersControllers.changePassword;

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

module.exports = userRouter;
