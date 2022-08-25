const { Pool } = require('pg');
require('dotenv').config();

const { DEV_DB_URL } = process.env;
const { hostname } = new URL(DEV_DB_URL);

const pool = new Pool({
  connectionString: DEV_DB_URL,
  ssl: hostname !== 'localhost',
});

module.exports = pool;
