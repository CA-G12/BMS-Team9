const connection = require('../config/connection');

// eslint-disable-next-line no-unused-vars
const publisherData = (req, res) => connection.query('Select name, address, contact_num from Publishers');

module.exports = { publisherData };
