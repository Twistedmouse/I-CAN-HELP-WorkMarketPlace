const router = require("express").Router();

const { Job, User } = require("../models");



//GET all jobs for homepage
router.get('/', async (req, res) => {
    try {
        const allJobs = await Job.findAll({

            order: [
                ['date', 'DESC'],
            ],
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

router.get('/job/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    // if (!req.session.loggedIn) {
    //   res.redirect('/login');
    // } else {
    // If the user is logged in, allow them 

    try {
        const allJobs = await Job.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['first_name', 'last_name', 'email'],
            }],

        });

        const job = allJobs.get({ plain: true });

        console.log(job)
        res.render('job', { job });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


router.get("/login", (req, res) => {
    //   if (req.session.loggedIn) {
    //     res.redirect("/");
    //     return;
    //   }

    res.render("login");
});

router.get("/signUp", (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/homepage');
    //     return;
    // }

    res.render("signUp");
});


//Post new job
router.get('/postjob', async (req, res) => {

    res.render('postjob');

});


module.exports = router;
