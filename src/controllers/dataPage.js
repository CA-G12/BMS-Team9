const book = require('../database/queries/book');

// eslint-disable-next-line no-unused-vars
const getDataPage = (req, res) => book.getGeneralData();

module.exports = { getDataPage };
