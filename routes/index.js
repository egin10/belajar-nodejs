var express = require('express');
var router = express.Router();

var main = require('./../controllers/index');

/* GET home page. */
router.get('/', main.index);
router.get('/login', main.loginGet);
router.post('/login', main.loginPost);
router.get('/logout', main.logout);

module.exports = router;
