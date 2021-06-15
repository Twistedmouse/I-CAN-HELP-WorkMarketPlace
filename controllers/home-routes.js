const router = require("express").Router();

router.get("/signUp", (req, res) => {
  // if (req.session.loggedIn) {
  //     res.redirect('/homepage');
  //     return;
  // }

  res.render("signUp");
});

// router.get('/', async (req, res) => {
//     try {
//         const dbGalleryData = await Gallery.findAll({
//             include: [
//                 {
//                     model: Painting,
//                     attributes: ['filename', 'description'],
//                 },
//             ],
//         });

//         const galleries = dbGalleryData.map((gallery) =>
//             gallery.get({ plain: true })
//         );

//         res.render('homepage', {
//             galleries,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });

module.exports = router;
