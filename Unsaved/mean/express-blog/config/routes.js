var express = require('express');
// var postRouter = require("./posts/routes");
var router  = express.Router();

// app.use("/posts", postRouter)

router.get('/', function(req, res) {
  res.render('index', { header: 'index!'});
});

router.get('/contact', function(req, res) {
  res.render('index', { header: 'contact!'});
});

router.get('/about', function(req, res) {
  res.render('index', { header: 'about!'});
});

router.get('/posts', function(req, res) {
  console.log("index");
  res.send("INDEX");
});

router.get('/posts/new', function(req, res) {
  console.log("new");
  res.render('posts/new');
});

router.get('/posts/:id', function(req, res) {
  console.log("show");
  res.send("SHOW");
});

router.post('/posts', function(req, res) {
  console.log(req);
  res.send("CREATE");
});

router.get('/posts/:id/edit', function(req, res) {
  console.log("edit");
  res.send("EDIT");
});

router.put('/posts/:id', function(req, res) {
  console.log("update");
  res.send("UPDATE");
});

router.delete('/posts/:id', function(req, res) {
  console.log("delete");
  res.send("DELETE");
});

router.get('/author', function(req, res) {
  console.log("index");
  res.send("INDEX");
});

router.get('/author/new', function(req, res) {
  console.log("new");
  res.render('author/new');
});

router.get('/author/:id', function(req, res) {
  console.log("show");
  res.send("SHOW");
});

router.post('/author', function(req, res) {
  console.log(req.body);
  res.send("CREATE");
});

router.get('/author/:id/edit', function(req, res) {
  console.log("edit");
  res.send("EDIT");
});

router.put('/author/:id', function(req, res) {
  console.log("update");
  res.send("UPDATE");
});

router.delete('/author/:id', function(req, res) {
  console.log("delete");
  res.send("DELETE");
});

module.exports = router;
