var express = require('express');
var router = express.Router();
var eventController = require('./../controllers/eventController');

//list
router.get('/', eventController.index);

//add GET
router.get('/add', eventController.addGet);
router.post('/add', eventController.addPost);
router.get('/edit/:id', eventController.editGet);
router.post('/edit', eventController.editPost);
router.get('/delete/:id', eventController.delete);

module.exports = router;
