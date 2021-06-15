const router = require("express").Router();

router.get("/signUp", (req, res) => {
  // if (req.session.loggedIn) {
  //     res.redirect('/homepage');
  //     return;
  // }

  res.render("signUp");
});
