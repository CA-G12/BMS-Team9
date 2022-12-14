const { join } = require('path');

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const router = require('./router');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

app.use(compression);

module.exports = app;
