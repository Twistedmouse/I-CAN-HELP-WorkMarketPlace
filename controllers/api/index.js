const router = require("express").Router();

const userRoutes = require("./user-routes");
const jobRoutes = require("./jobs-routes");

router.use("/users", userRoutes);
router.use('/jobs', jobRoutes);


module.exports = router;
