const routes = require("./routes");

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "NewTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

module.exports = localsMiddleware;
