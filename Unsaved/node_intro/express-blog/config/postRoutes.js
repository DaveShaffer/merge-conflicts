var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  console.log("index");
  res.send("INDEX");
});

router.get('/new', function(req, res) {
  console.log("new");
  res.render('posts/new');
});

router.get('/:id', function(req, res) {
  console.log("show");
  res.send("SHOW");
});

router.post('/', function(req, res) {
  console.log("req.body");
  res.send("CREATE");
});

router.get('/:id/edit', function(req, res) {
  console.log("edit");
  res.send("EDIT");
});

router.put('/:id', function(req, res) {
  console.log("update");
  res.send("UPDATE");
});

router.delete('/:id', function(req, res) {
  console.log("delete");
  res.send("DELETE");
});

module.exports = router;
