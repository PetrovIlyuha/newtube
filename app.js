const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routers/userRouter");

const videoRouter = require("./routers/videoRouter");
const globalRouter = require("./routers/globalRouter");
const localMiddleware = require("./middlewares");

const routes = require("./routes");
const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localMiddleware);

// routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

module.exports = app;
