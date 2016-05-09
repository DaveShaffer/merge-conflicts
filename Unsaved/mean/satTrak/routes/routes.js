var express = require('express');
var router = express.Router();
var Sat = require('../models/Sat')

router.get('/', function(req, res) {
  console.log("index");
  res.render('index', {header: 'index!'});
});

router.get('/sats', function(req, res) {
  console.log("index");
  Sat.find(function(err, sats) {
    res.render('layout', {sats: sats});
  })

});

router.get('/sats/new', function(req, res) {
  console.log("new");
  res.render('form');
});

router.get('/sats/:id', function(req, res) {
  console.log("show");
  Sat.findById( {_id: req.params.id}, function(err, sat) {
    res.send(sat);
  })
});

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

router.get('/sats/:id/edit', function(req, res, next) {
  console.log("edit");
  Sat.findById( { _id: req.params.id}, function(err, sat) {
    if(err) res.send("ERROR");
    res.render('layout', {sat: sat});
  })
});

router.put('/sats/:id', function(req, res, next) {
  console.log("update");
  Sat.findByIdAndUpdate(req.params.id, {
    noradNum: req.body.noradNum,
    name: req.body.name,
    country: req.body.country,
    launchDate: req.body.launchDate,
    purpose: req.body.purpose,
    perigee: req.body.perigee,
    apogee: req.body.apogee
  }, function(err, sat) {
    if (err) res.send("error");
    res.redirect('/sats');
  });
});

router.delete('/sats/:id', function(req, res, next) {
  console.log("delete");
  Sat.findByIdAndRemove(req.params.id, function(err, sat) {
    res.redirect('/sats');
  });
  // res.send("DELETE");
});

module.exports = router;
