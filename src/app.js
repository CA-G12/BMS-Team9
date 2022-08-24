const { join } = require('path');

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const router = require('./router');
const {
  getDataPage,
  getGenerals,
  databaseSearch,
  insertData,
} = require('./controllers/index');
const {
  serverError,
  notFound,
} = require('./controllers/errorHandling/index');

const app = express();

app.set('port', process.env.port || 3000);

app.use(express.urlencoded());
app.use(express.json());
app.use(compression);
app.use(helmet());

app.use(express.static(join(__dirname, '..', 'public')));

app.use(router());

module.exports = { app };
