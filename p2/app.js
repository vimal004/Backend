const express = require("express");
const app = express();
app.use(express.json());

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

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/api/users/all", (req, res) => {
  if (!users) {
    console.log("No user data available.");
    return;
  }
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  const data = users.find((obj) => obj.id === parseInt(req.params.id));
  if (!data) res.status(404).send("Data not found");
  res.send(data);
});

app.get("/api/users", (req, res) => {
  const data = users.find((obj) => obj.id === parseInt(req.body.id));
  if (!data) res.status(404).send("Data not found");
  res.send(data);
});

app.post("/api/users", (req, res) => {
  const data = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  users.push(data);
  res.send(data);
});

app.put("/api/users", (req, res) => {
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

app.delete("/api/users", (req, res) => {
  const index = users.findIndex((obj) => obj.id === parseInt(req.body.id));
  users.splice(index, 1);
  res.send(users);
});

const Port = process.env.port || 3000;
app.listen(Port, () => {
  console.log(`Listening on port ${Port}`);
});
