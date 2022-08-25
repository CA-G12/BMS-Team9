const connection = require('../config/connection');

class Author {
  constructor() {
    this.getDataQuery = 'Select name, field, country, title, category from Authors inner join Books on Authors.id = Books.id';
    this.insertQuery = {
      text: 'insert into Authors(name, field, country, book_id) values ($1, $2, $3, $4) returning *',
      values: [],
    };
  }

  getAuthorsData() {
    return connection.query(this.getDataQuery);
  }

  insertData(req) {
    const {
      // eslint-disable-next-line camelcase
      name, field, country, book_name,
    } = req.body;
    this.insertQuery.values = [name, field, country, Number(book_name)];
    return connection.query(this.insertQuery);
  }
}

const author = new Author();

module.exports = author;
