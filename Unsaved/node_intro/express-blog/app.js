var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var postRouter  = require("./config/postRoutes");
var authorRouter = require("./config/authorRoutes");
var bodyParser = require("body-parser");

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Middleware
app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

app.use('/posts', postRouter);
app.use('/authors', authorRouter);
app.listen(port);
console.log('Server started on ' + port);
