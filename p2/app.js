const express = require("express");
const app = express();
app.use(express.json());
const users = require("./routes/users");
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("Hello!");
});

const Port = process.env.port || 3000;
app.listen(Port, () => {
  console.log(`Listening on port ${Port}`);
});
