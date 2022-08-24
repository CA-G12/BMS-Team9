const connection = require('../config/connection');

// eslint-disable-next-line no-unused-vars
const getGeneralData = (req, res) => connection.query('select title, category, price, name, field from Books inner join Authors on Books.auth_id = Authors.id');

module.exports = { getGeneralData };
