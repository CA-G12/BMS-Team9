const router = require('express').Router();

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

module.exports = { router };
