require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

function getDatabaseUrl() {
  const dbUser = process.env.DATABASE_USER || "postgres";
  const dbPassword = process.env.DATABASE_PASS
    ? encodeURI(process.env.DATABASE_PASS)
    : "postgres";
  const dbHost = process.env.DATABASE_HOST || "localhost";
  const dbPort = process.env.DATABASE_PORT
    ? Number(process.env.DATABASE_PORT)
    : 5432;
  const dbName = process.env.DATABASE_NAME || "vaccine_registration";
  return (
    process.env.DATABASE_URL ||
    `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
  );
}

const BYCRYPT_WORK_FACTOR = 13;

console.log("wedding Registration Config:".green, getDatabaseUrl());
console.log("wedding Registration Port:".blue, PORT);
console.log("DatabaseURL:", getDatabaseUrl());

module.exports = {
  PORT,
  BYCRYPT_WORK_FACTOR,
  getDatabaseUrl,
};
