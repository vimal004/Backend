const express = require("express");
const router = express.Router();

const Users = [
  {
    id: 1,
    name: "Vimal",
    age: 21,
  },
];

router.get("/", (req, res) => {
  res.send(Users);
});

router.post("/", (req, res) => {
  const newuser = {
    id: Users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  Users.push(newuser);
  res.send(newuser);
});

router.put("/", (req, res) => {
  let updateuser = Users.find((obj) => obj.id === parseInt(req.body.id));
  updateuser.name = req.body.name;
  updateuser.age = req.body.age;
  res.send(updateuser);
});

router.delete("/", (req, res) => {
  let deluser = Users.findIndex((obj) => obj.id === req.body.id);
  Users.splice(deluser, 1);
  res.send("User deleted");
  res.send(Users);
});

module.exports = router;
