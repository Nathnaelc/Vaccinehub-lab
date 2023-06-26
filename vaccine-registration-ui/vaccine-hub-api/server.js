const express = require("express");
const cors = require("cors");
const DEBUG = require("debug");
const morgan = require("morgan");
const { BadRequestError, NotFoundError } = require("./utils/errors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It works!");
});

app.use((req, res, next) => {
  next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
