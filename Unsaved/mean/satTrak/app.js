var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
//var router = express.Router();
var router = require("./routes/routes");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var mongoose = require('mongoose');
//var db = require('./db');
//var Sat = require('./sat');

mongoose.connect('mongodb://localhost/sats');

app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', router);
//app.use('/songs', songs);

app.listen(port);
console.log('Server started on ' + port);

