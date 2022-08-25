// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  if (err) {
    res.json({ msg: 'Error!!!' });
  } else {
    res.json({ msg: 'Internal Server Error!!!' });
  }
};

module.exports = { serverError };
