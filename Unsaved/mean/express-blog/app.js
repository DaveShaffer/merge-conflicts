var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
// var router  = express.Router();
var router = require("./config/routes");
// var postRouter = require("./posts/routes");
var bodyParser = require("body-parser");


app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

// Routing
// router.get('/', function(req, res) {
    // console.log('%s request to %s from %s', req.method, req.path, req.ip);
    // res.render('index', { header: 'index!' });
// });

// router.get('/contact', function(req, res) {
//   res.render('index', { header: 'contact!' });
// });

// router.get('/about', function(req, res) {
//   res.render('index', { header: 'about!' });
// });

// app.get('/', function(req, res) {
//   res.send('homepage');
// });

app.use('/', router);
// app.use("/posts", postRouter)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
  extended: true
}));


app.listen(port);
console.log('Server started on ' + port);


