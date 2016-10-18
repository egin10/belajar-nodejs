var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//connecting to database (mariadb)
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'apasih10',
  database : 'nodejs'
});
connection.connect();
connection.query('USE nodejs', function(err, rows, fields) {
  if (err) throw err;
  console.log('database connected');
});

/* GET users listing. */
router.get('/', function(req, res) {
  connection.query('SELECT * FROM contacts', function(err, rows, fields){
    res.json(rows);
  });
});

module.exports = router;
