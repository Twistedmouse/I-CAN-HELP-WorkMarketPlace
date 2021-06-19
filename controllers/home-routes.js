const router = require("express").Router();
const nodemailer = require('nodemailer')

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


//Email notification 
//Using google
async function main() {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    });

    const mailOptions = {
        from: "lochan.sharad@gmail.com",
        to: "kshetrisarad@gmail.com",
        subject: 'Nodemailer Project',
        text: 'Hi from your nodemailer project'
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
}

//Sends Email notification to user
router.get('/test', (req, res) => {
    main().catch(console.error)
    res.end();
})



module.exports = router;
