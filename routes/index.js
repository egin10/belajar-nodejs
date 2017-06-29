var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Belajar Nodejs', header: "Welcome to Express Js" });
});

module.exports = router;
