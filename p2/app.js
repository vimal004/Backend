const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect("mongodb+srv://2004vimal:zaq1%40wsx@cluster0.6tktuqx.mongodb.net/")
  .then(() => {
    console.log("Mongo DB connected!");
  })
  .catch((err) => {
    console.log("Error occurred in connecting to DB.", err);
  });

const collegeSchema = new mongoose.Schema({
  name: String,
});

const colleges = new mongoose.model("colleges", collegeSchema);

app.post("/api/colleges", (req, res) => {
  const data = new colleges({
    name: req.body.name,
  });
  colleges.sa
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
