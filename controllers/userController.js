const join = (req, res) => res.render("Join", { pageTitle: "Join Us" });
const login = (req, res) => res.render("Login", { pageTitle: "Log in" });
const logout = (req, res) => res.render("Logout", { pageTitle: "Log out" });
const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Page" });
const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "edit profile" });
const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "change password" });

module.exports = {
  join: join,
  login: login,
  logout: logout,
  userDetail: userDetail,
  editProfile: editProfile,
  changePassword: changePassword
};
