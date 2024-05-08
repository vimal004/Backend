const express = require("express");
const Ajv = require("ajv");

const app = express();
app.use(express.json());

// Define schema for student data
const studentSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 4, // Minimum length of the name
    },
  },
  required: ["name"],
};

// Create Ajv instance and compile schema
const ajv = new Ajv();
const validateStudent = ajv.compile(studentSchema);

let data = [
  {
    id: 1,
    name: "Vimal",
  },
  {
    id: 2,
    name: "Lohith",
  },
  {
    id: 3,
    name: "Varsan",
  },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/students", (req, res) => {
  res.send(data);
});

app.post("/students", (req, res) => {
  // Validate request body against schema
  const valid = validateStudent(req.body);
  if (!valid) {
    return res.status(400).json({ error: "Invalid student data" });
  }

  const newdat = {
    id: data.length + 1,
    name: req.body.name,
  };
  data.push(newdat);
  res.send(data);
});

app.delete("/students", (req, res) => {
  const index = data.findIndex((obj) => obj.id === parseInt(req.body.id));
  data.splice(index, 1);
  res.send(data);
});

app.put("/students", (req, res) => {
  let obj = data.find((obj) => obj.id === parseInt(req.body.id));
  obj.name = req.body.name;
  res.send(data);
});

app.get("/students/:id", (req, res) => {
  const newdata = data.find((obj) => obj.id === parseInt(req.params.id));
  res.send(newdata);
});

const Port = process.env.port || 3000;
app.listen(3000, () => {
  console.log(`Listening on port ${Port}...`);
});
