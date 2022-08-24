const { json } = require('express');
const { generalData } = require('../database/queries/book');

const getGenerals (_req, res) => {
  generalData()
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
}

module.exports = { getGenerals };
