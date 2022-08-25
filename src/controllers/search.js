const connection = require('../database/config/connection');

const databaseSearch = (req) => {
  const { topic, value } = req.body;
  switch (topic) {
    case 'book':
      connection.query('select title, category, price from Books where Books.title === $1', [value]);
      break;
    case 'category':
      connection.query('select title, category, price from Books where Books.title === $1', [value]);
      break;
    case 'auth_name':
      connection.query('select name, field, country from Authors');
      break;
    case 'pub_name':
      connection.query('select name, address, contact_num from Publishers');
      break;
    default:
      connection.query('select title, category, price from Books where Books.title === $1', [value]);
      break;
  }
};

module.exports = { databaseSearch };
