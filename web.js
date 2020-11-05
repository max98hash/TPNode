const express = require('express');
const app = express();
const morgan = require('morgan'); // Middleware de logging

app.use(morgan('combined'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("hello");
});

app.get('/home', function(req, res) {
  res.render("home");
});

app.get('/user/:uid', function(req, res) {
  res.render("userid",{id :req.params.uid});
});

app.use(function(req, res, next){
  res.status(404).render("error404");
});

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});