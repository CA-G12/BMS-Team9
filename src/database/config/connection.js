const { Pool } = require('pg');
require('dotenv').config();

const { DATABASE_URL } = process.env;
const { hostname } = new URL(DEV_DB_URL);

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
