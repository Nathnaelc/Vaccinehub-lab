const express = require("express");
const cors = require("cors");
const DEBUG = require("debug");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("It works!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
