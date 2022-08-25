const connection = require('../config/connection');

class Book {
  constructor() {
    this.getDataQuery = 'select title, category, price, name, field from Books inner join Authors on Books.auth_id = Authors.id';
    this.insertQuery = {
      text: 'insert into Books(title, category, price, year) values ($1, $2, $3, $4) returning *',
      values: [],
    };
  }

  getGeneralData() {
    return connection.query(this.getDataQuery);
  }

  // eslint-disable-next-line no-unused-vars
  insertData(req, res) {
    const {
      // eslint-disable-next-line camelcase
      title, category, price, pub_year,
    } = req.body;
    this.insertQuery.values = [title, category, Number(price), Number(pub_year)];
    return connection.query(this.insertQuery);
  }
}

const book = new Book();

module.exports = book;
