const { Pool } = require('pg');

const { DEV_DB_URL } = process.env;
const { hostname } = new URL(DEV_DB_URL);

const pool = new Pool({
  connectionString: DEV_DB_URL,
  ssl: hostname === 'localhost',
});

module.exports = pool;
