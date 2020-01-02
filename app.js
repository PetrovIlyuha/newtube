const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRouter = require("./routers/userRouter");
const videoRouter = require("./routers/videoRouter");
const globalRouter = require("./routers/globalRouter");
const routes = require("./routes");
const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

module.exports = app;
