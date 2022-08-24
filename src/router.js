const router = require('express').Router();

const {
  getDataPage,
  getGenerals,
  databaseSearch,
  insertData,
} = require('./controllers/index');
const {
  serverError,
  notFound,
} = require('./controllers/errorHandling/index');

router.get('/insert', (req, res) => {
  console.log(req.body);
});
router.get('/general', getGenerals);
router.get('/search', databaseSearch);
router.use(insertData);
router.use(serverError);
router.use(notFound);

module.exports = router;
