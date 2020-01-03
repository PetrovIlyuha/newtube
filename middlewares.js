const routes = require("./routes");

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "NewTube";
  res.locals.routes = routes;
  next();
};

module.exports = localsMiddleware;
