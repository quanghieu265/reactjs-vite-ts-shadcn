const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: process.env.POSTGRES_HOST,
  database: "nodejs-server",
  password: process.env.POSTGRES_PASSWORD,
  port: 5432
});

module.exports = pool;
