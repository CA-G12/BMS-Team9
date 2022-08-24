const connection = require('../config/connection');

// eslint-disable-next-line no-unused-vars
const authorsData = (req, res) => connection.query('Select name, field, country, title, category from Authors inner join Books on Authors.id = Books.id');

module.exports = { authorsData };
