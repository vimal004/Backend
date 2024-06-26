const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://2004vimal:zaq1%40wsx@cluster0.6tktuqx.mongodb.net/")
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4 },
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/users", async (req, res) => {
  try {
    const result = await User.find();
    console.log(result); // Log the result to see what's being returned
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching users");
  }
});

app.post("/api/users", async (req, res) => {
  const { error } = User.validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }
  let data = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  data = await data.save();
  res.send(data);
});

app.put("/api/users", async (req, res) => {
  const { error } = User.validate(req.body);
  if (error) {
    res.send("error occured");
    return;
  }
  const result = await User.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.send(result);
});

app.delete("/api/users/:_id", async (req, res) => {
  const result = await User.findByIdAndDelete(req.params._id);
  res.send(result);
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
