const connection = require('../config/connection');

class Publisher {
  constructor() {
    this.getDataQuery = 'Select name, address, contact_num from Publishers';
    this.insertQuery = {
      text: 'insert into Publishers(name, address, contact_num, book_id) values ($1, $2, $3, $4) returning *',
      values: [],
    };
  }

  getGeneralData() {
    return connection.query(this.getDataQuery);
  }

  insertData(req) {
    const {
      // eslint-disable-next-line camelcase
      pub_name, address, contact, book_name,
    } = req.body;
    // eslint-disable-next-line camelcase
    this.insertQuery.values = [pub_name, address, Number(contact), Number(book_name)];
    return connection.query(this.insertQuery);
  }
}

const publisher = new Publisher();

module.exports = publisher;
