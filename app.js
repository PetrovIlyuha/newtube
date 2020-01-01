const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRouter = require("./router");

const app = express();

const handleHome = (req, res) => res.send("hello from home page");
const handleProfile = (req, res) => res.send("Hello from profile page");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// routes
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);

module.exports = app;
