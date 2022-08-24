const { generalData } = require('../database/queries/book');

const getGenerals = (req, res, next) => {
  generalData()
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = { getGenerals };
