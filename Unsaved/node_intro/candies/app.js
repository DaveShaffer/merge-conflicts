var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var path = require('path');
var logger = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(logger('dev'));

app.use(require('./controllers'));
app.listen(port);
console.log('Server started on ' + port);
