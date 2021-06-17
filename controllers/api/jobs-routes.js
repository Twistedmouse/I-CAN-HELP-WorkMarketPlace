const router = require("express").Router();

const { Job, User } = require("../../models");


//GET job localhost:3001/api/jobs
router.get('/', async (req, res) => {
    try {
        const allJobs = await Job.findAll({
            include: [{
                model: User,
                attributes: ['first_name', 'last_name', 'email'],
            }],

        });

        const postJobs = allJobs.map((job) =>
            job.get({ plain: true })
        );

        res.render('homepage', { postJobs });
    } catch (error) {
        console.log(err);
        res.status(500).json(err);
    }

});


//Create new job 
router.post('/', async (req, res) => {
    console.log("Job-routes-Post", req.body);
    try {
        const newJob = await Job.create({
            job_name: req.body.jobname,
            job_price: req.body.price,
            job_descr: req.body.jobDescr,
            job_location: req.body.location,
            user_id: req.body.userid,
        });
        res.status(200).json(newJob);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});



//job post 
router.get('/post', async (req, res) => {

    res.render('postjob');

});


module.exports = router;