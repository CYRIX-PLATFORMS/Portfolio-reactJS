const mongoose = require("mongoose");
const testimonialModel = new mongoose.model(
  "testimonials",
  mongoose.Schema({
    _id: String,
    avatar: String,
    Cname: String,
    testimonial: String,
  })
);

module.exports = {
  testimonialModel,
}