const routes = require('../routes');

const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join Us" })
};

const postJoin = (req, res) => {
  const {
    body: {
      name, email, password, password2
    }
  } = req;
  if (password !== password2) {
    res.status(400).json({
      message: "Passwords don't match"
    })
  } else {
    //TODO: Register user
    //TODO: Log User In
    res.redirect(routes.home);
  }
  res.render("join", { pageTitle: "Join Us" })
};

const login = (req, res) => res.render("Login", { pageTitle: "Log in" });
const logout = (req, res) => res.render("Logout", { pageTitle: "Log out" });
const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Page" });
const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit profile" });
const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change password" });

module.exports = {
  getJoin,
  postJoin,
  login,
  logout,
  userDetail,
  editProfile,
  changePassword
};
