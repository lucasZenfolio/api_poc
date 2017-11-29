const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const promisify = require('es6-promisify');
const routes = require('./api/routes/routes');

const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

module.exports = app;