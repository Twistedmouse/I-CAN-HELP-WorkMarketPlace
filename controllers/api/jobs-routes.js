const router = require("express").Router();

const { Job } = require("../../models");



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


module.exports = router;