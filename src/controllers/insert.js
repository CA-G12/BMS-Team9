// eslint-disable-next-line no-unused-vars
const book = require('../database/queries/book');
const author = require('../database/queries/author');
const publisher = require('../database/queries/publisher');

const insertData = (req, res, next) => {
  const firstKey = Object.keys(req.body)[0];
  if (firstKey === 'title') {
    return book.insertData(req, res, next)
      .then((data) => res.json(data.rows))
      .catch((err) => next(err));
  }
  if (firstKey === 'name') {
    return author.insertData(req, res, next)
      .then((data) => res.json(data.rows))
      .catch((err) => next(err));
  }
  if (firstKey === 'pub_name') {
    return publisher.insertData(req, res, next)
      .then((data) => res.json(data.rows))
      .catch((err) => next(err));
  }
  return book.insertData(req, res, next)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = { insertData };
