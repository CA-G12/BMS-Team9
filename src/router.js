const router = require('express').Router();

const {
  getGenerals,
  databaseSearch,
  insertData,
} = require('./controllers/index');
const {
  serverError,
  notFound,
} = require('./controllers/errorHandling/index');

router.get('/general', getGenerals);
router.get('/search', databaseSearch);
router.use('/insert', insertData);
router.use('*', notFound);
router.use(serverError);

module.exports = router;
