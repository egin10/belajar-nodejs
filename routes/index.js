var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var nama = ['satu','dua','tiga'];
  res.render('index', { title: 'Belajar Nodejs', name: nama });
});

module.exports = router;
