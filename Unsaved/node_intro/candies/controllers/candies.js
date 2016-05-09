var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

candies = [
{id: 1, name: "Wrigleys", color: "Yellow"},
{id: 2, name: "Pez", color: "Green"},
{id: 3, name: "Marshmallow", color: "White"},
{id: 4, name: "Jolly Rancher", color: "Blue"}
]

router.get('/', function(req, res, next) {
  res.json(candies);
});

router.post('/', function(req, res) {
  candies.push(req.body)
  res.json(req.body);
});

router.get('/:id', function(req, res) {
  candy = candies.filter(function(element){ return element["id"] == req.params.id })[0]
  res.json(candy);
});

router.delete('/:id', function(req, res) {
  for(i in candies){
    if(candies[i]["id"] == req.params.id){
      delete candies[i]
    }
  }
  res.json({ message : 'deleted' });
});

router.put('/:id/edit', function(req, res) {
  for(i in candies){
    if(candies[i]["id"] == req.params.id){
      candies[i] = req.body
    }
  }
  res.format({
    json: function(){ res.json(req.body); }
  });
});

module.exports = router
