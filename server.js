const routes = require('./api/routes/routes');

var express = require('express'),
app = express(),
port = process.env.PORT || 8080;

app.use('/', routes);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);