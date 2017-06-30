var express = require('express');
var router = express.Router();

var main = require('./../controllers/index');
var isAuth = require('./../isAuth');

/* GET home page. */
router.get('/', isAuth.isLogin, main.index);
router.get('/login', main.loginGet);
router.post('/login', main.loginPost);
router.get('/logout', main.logout);

module.exports = router;
