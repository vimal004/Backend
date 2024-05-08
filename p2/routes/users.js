const express = require("express");
const router = express.Router();


const users = [
  {
    id: 1,
    name: "Vimal",
    email: "2004.vimal@gmail.com",
    password: "Zaq1@wsxd",
  },
  {
    id: 2,
    name: "Lohith",
    email: "lohith@gmail.com",
    password: "zaq1@wsx",
  },
  {
    id: 3,
    name: "Varsan",
    email: "varsan@gmail.com",
    password: "zaq1@wsx",
  },
];

router.get("/all", (req, res) => {
  if (!users) {
    console.log("No user data available.");
    return;
  }
  res.send(users);
});

router.get("/:id", (req, res) => {
  const data = users.find((obj) => obj.id === parseInt(req.params.id));
  if (!data) res.status(404).send("Data not found");
  res.send(data);
});

router.get("/", (req, res) => {
  const data = users.find((obj) => obj.id === parseInt(req.body.id));
  if (!data) res.status(404).send("Data not found");
  res.send(data);
});

router.post("/", (req, res) => {
  const data = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  users.push(data);
  res.send(data);
});

router.put("/", (req, res) => {
  const data = users.find((obj) => obj.id === parseInt(req.body.id));
  if (!data) {
    console.log("Data not found");
    res.send("Data not found").status(404);
    return;
  }
  data.name = req.body.name;
  data.email = req.body.email;
  data.password = req.body.password;
  res.send(users);
});

router.delete("/", (req, res) => {
  const index = users.findIndex((obj) => obj.id === parseInt(req.body.id));
  users.splice(index, 1);
  res.send(users);
});

module.exports = router;
