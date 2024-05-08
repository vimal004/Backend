const express = require("express");
const app = express();
app.use(express.json());
const users = require("./routes/users");
const home = require("./routes/home");
app.use("/api/users", users);
app.use("/", home);

const Port = process.env.port || 3000;
app.listen(Port, () => {
  console.log(`Listening on port ${Port}`);
});
