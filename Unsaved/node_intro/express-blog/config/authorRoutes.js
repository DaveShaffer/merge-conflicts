var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  console.log("author index");
  res.send('GET request to /authors, this is the INDEX action');
});

router.get('/new', function(req, res) {
  console.log("author new");
  res.render('authors/new');
});

router.get('/:id', function(req, res) {
  console.log("author show");
  res.send("GET request to authors/id, this is the SHOW action");
});

router.post('/', function(req, res) {
  console.log("POST request to /authors, this is the CREATE action");
  res.send("POST request to /authors, this is the CREATE action");
});

router.get('/:id/edit', function(req, res) {
  console.log("author edit");
  res.send("GET request to /authors/id/edit, this is the EDIT action");
});

router.put('/:id', function(req, res) {
  console.log("author update");
  res.send("PUT request to /authors/id, this is the UPDATE action");
});

router.delete('/:id', function(req, res) {
  console.log("author delete");
  res.send("DELETE request to /authors/id, this is the DELETE action");
});

module.exports = router;
