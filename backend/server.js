const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


app.use(cors()); //using cors

app.use(express.json()) //middleware to parse json data

app.use("/api", require("./router/app.route"))

const PORT = process.env.PORT || 5000;

//connection to mongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connection to MongoDB Successful!");
      console.log(`Server Running on port ${PORT}`);
    })
  })
  .catch((err) => console.log(err));

