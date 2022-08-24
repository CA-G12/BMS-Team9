const { getDataPage } = require('./dataPage');
const { getGenerals } = require('./general');
const { insertData } = require('./insert');
const { databaseSearch } = require('./search');

module.exports = {
  getDataPage,
  getGenerals,
  insertData,
  databaseSearch,
};
