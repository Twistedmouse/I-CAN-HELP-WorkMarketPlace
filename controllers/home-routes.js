const router = require("express").Router();
const nodemailer = require("nodemailer");

const { Job, User } = require("../models");

//GET all jobs for homepage
router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const allJobs = await Job.findAll({
        order: [["date", "DESC"]],
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name", "email"],
          },
        ],
      });

      const jobs = allJobs.map((job) => job.get({ plain: true }));

      res.render("homepage", { jobs });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
});

router.get("/job/:id", async (req, res) => {
  // 'If the user is not logged in, redirect the user to the login page

  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const allJobs = await Job.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name", "email"],
          },
        ],
      });

      const job = allJobs.get({ plain: true });
      console.log(job);
      res.render("job", { job });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signUp", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signUp");
});

//Create New Job
router.get("/postjob", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    res.render("postjob");
  }
});

//Email notification
//Using google
async function main(emailTo, userdetail) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: "",
    to: emailTo,
    subject: "Job Accepted",
    text: `Hi Your Job has been accepted. by: ${userdetail.first_name} ${userdetail.email}`,
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
router.post("/sendEmail", async (req, res) => {
  console.log(req.session.userid);
  const userdetails = await User.findByPk(req.session.userid);
  const userdetail = userdetails.get({ plain: true });
  console.log("userdetail:", userdetail);
  try {
    main(req.body.userEmail, userdetail);
    res.status(200).json(req.body.userEmail);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
