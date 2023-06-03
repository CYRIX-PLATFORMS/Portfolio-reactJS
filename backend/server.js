const express = require("express");
const app = express();

// Expose an API endpoint to get the portfolio of projects
app.get("/projects", (req, res) => {
  const projects = collection.find().toArray();
  res.json(projects);
});

// Start the server
app.listen(3000);


const PORT = process.env.PORT || 5000;

//connection to mongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    })
  })
  .catch((err) => console.log(err));
