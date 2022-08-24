const { serverError } = require('./500');
const { notFound } = require('./404');

module.exports = {
  serverError,
  notFound,
};
