const router = require("express").Router();

router.get("/signUp", (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/homepage');
    //     return;
    // }

    res.render("signUp");
});

router.get('/', async (req, res) => {

    res.render('homepage');

});

router.get("/login", (req, res) => {
    //   if (req.session.loggedIn) {
    //     res.redirect("/");
    //     return;
    //   }

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
