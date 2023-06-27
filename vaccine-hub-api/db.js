const { Client } = require("pg");
const { getDatabaseUrl } = require("./config");
require("colors");

const db = new Client({
  connectionString: getDatabaseUrl(),
});

db.connect((err) => {
  if (err) {
    console.log("connection error".red, err.stack);
  } else {
    console.log("Successfully connected to postgres db".blue);
  }
});

module.exports = db;
