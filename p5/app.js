const express = require("express");
const router = require("./router");
const app = express();
app.use(express.json());
app.use("/api/users", router);

app.get("/", (req, res) => {
  res.send("Hello!!!");
  console.log("Hello!");
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Listening on port ${port}...`);
});
