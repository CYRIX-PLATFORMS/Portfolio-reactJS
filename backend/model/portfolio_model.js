const mongoose = require("mongoose");
const portfolioModel = new mongoose.model(
  "portfolioContent",
  mongoose.Schema({
    _id: String,
    image: String,
    github: String,
    demo: String,
    title: String,
  })
);

module.exports = {
  portfolioModel,
};
