var express = require('express');
var router = express.Router();

var Animal = require('../models/animal');

//INDEX
router.get('/', function(req, res, next) {
  Animal.find({})
  .then(function(animals) {
    res.render('animals/index', {animals: animals});
  }, function(err) {
    return next(err);
  });
});
