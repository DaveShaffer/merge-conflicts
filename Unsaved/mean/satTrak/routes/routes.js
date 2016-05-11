var express = require('express');
var router = express.Router();
var Sat = require('../models/Sat')

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

// Homepage
router.get('/', function(req, res) {
  console.log("index");
  res.render('index', {header: 'index!'});
});

// INDEX
router.get('/sats', function(req, res) {
  console.log("index");
  Sat.find(function(err, sats) {
    res.render('layout', {sats: sats});
  })
});

// NEW
router.get('/sats/new', function(req, res) {
  console.log("new");
  res.render('form');
});

// SHOW
router.get('/sats/:id', function(req, res) {
  console.log("show");
  Sat.findById( {_id: req.params.id}, function(err, sat) {
    res.send(sat);
  })
});

// CREATE
router.post('/sats', function(req, res) {
  console.log("create");
  Sat.create({
    noradNum: req.body.noradNum,
    name: req.body.name,
    country: req.body.country,
    launchDate: req.body.launchDate,
    purpose: req.body.purpose,
    perigee: req.body.perigee,
    apogee: req.body.apogee
  }, function(err, sat) {
    if (err) {
      res.send("ERROR")
    } else {
      res.redirect('/sats');
    }
  });
});

// EDIT
router.get('/sats/:id/edit', function(req, res, next) {
  console.log("edit");
  Sat.findById(req.params.id)
  .then(function(sat) {
   if (!sat) return next(makeError(res, 'no sat'));
   res.render('sats/edit', {sat: sat});
  }, function(err) {
    return next(err);
  });
});

// UPDATE
router.put('/sats/:id', function(req, res, next) {
  console.log("update");
  Sat.findById(req.params.id)
  .then(function(sat) {
    if (!sat) return next(makeError(res, 'no sat'));
    sat.noradNum = req.body.noradNum;
    sat.name = req.body.name;
    sat.country = req.body.country;
    sat.launchDate = req.body.launchDate;
    sat.purpose = req.body.purpose;
    sat.perigee = req.body.perigee;
    sat.apogee = req.body.apogee;
    return sat.save();
  })
    .then(function(saved) {
      res.redirect('/sats');
    }, function(err) {
      return next(err);
  });
});

// DELETE
router.delete('/sats/:id', function(req, res, next) {
  console.log("delete");
  Sat.findByIdAndRemove(req.params.id, function(err, sat) {
    res.redirect('/sats');
  });
});

module.exports = router;
