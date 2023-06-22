const mongoose = require("mongoose");
const portfolioModel = new mongoose.model(
  "portfolioContent",
  mongoose.Schema({
    _id: String,
    demo: String,
    github: String,
    image: String,
    title: String
  })
);

module.exports = {
  portfolioModel,
};
