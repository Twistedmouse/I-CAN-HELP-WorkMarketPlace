const router = require("express").Router();

const { Job, User } = require("../models");

router.get("/signUp", (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/homepage');
    //     return;
    // }

    res.render("signUp");
});

//GET all jobs for homepage
router.get('/', async (req, res) => {
    try {
        const allJobs = await Job.findAll({
            include: [{
                model: User,
                attributes: ['first_name', 'last_name', 'email'],
            }],

        });

        const jobs = allJobs.map((job) =>
            job.get({ plain: true })
        );

        res.render('homepage', { jobs });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

});

// router.get('/', async (req, res) => {

//     res.render('homepage');

// });

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


//Post new job
router.get('/postjob', async (req, res) => {

    res.render('postjob');

});


module.exports = router;
