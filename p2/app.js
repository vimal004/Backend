const express = require("express");
const app = express();
app.use(express.json());




const Port = process.env.port || 3000;
app.listen(Port, () => {
  console.log(`Listening on port ${Port}`);
});
