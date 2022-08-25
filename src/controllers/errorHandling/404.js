const notFound = (req, res) => {
  res.json({ msg: 'Page not found!!!' });
};

module.exports = { notFound };
