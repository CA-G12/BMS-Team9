const app = require('./app');

const port = app.get('port');

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`The app is listening on port: ${port}, and ready to accept requests!`);
});
