var express = require('express');
var router = express.Router();
var eventController = require('./../controllers/eventController');
var isAuth = require('./../isAuth');

//list
router.get('/', eventController.index);

//add GET
router.get('/add', isAuth.isLogin, eventController.addGet);
router.post('/add', isAuth.isLogin, eventController.addPost);
router.get('/edit/:id', isAuth.isLogin, eventController.editGet);
router.post('/edit', isAuth.isLogin, eventController.editPost);
router.get('/delete/:id', isAuth.isLogin, eventController.delete);

module.exports = router;
