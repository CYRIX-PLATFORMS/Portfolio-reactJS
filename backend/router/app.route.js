const controller = require("../controller/app.controller");
const express =  require("express");
const router = express.Router();

router.get('/portfolio', controller.portfolioAppRoute);
router.get('/testimonial', controller.testimonialAppRoute);


module.exports = router;