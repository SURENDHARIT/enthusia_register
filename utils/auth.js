module.exports = isAuthenticated = (req, res, next) => {
  console.log(req.session.userid);
  if (req.session.userid) {
    console.log("Authenticated");
    next();
  } else {
    res.redirect("/");
  }
};
