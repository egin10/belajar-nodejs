var express = require('express');
var router = express.Router();

router.get('/', function(req, res, connection) {
  req.getConnection(function(err,connection){
     connection.query('SELECT * FROM contacts',function(err,rows) {
        if(err)
           console.log("Error Selecting : %s ",err );
           res.json(rows);
         });
    });
});

router.get('/:userID', function(req, res, connection) {
  req.getConnection(function(err,connection){
     connection.query('SELECT * FROM contacts WHERE id = "' + req.params.userID + '"' ,function(err,rows) {
        // if(err)
          console.log(rows[0].first_name);
          res.json(rows[0].first_name);
          // res.render('user', { title: 'Data User', name: nama });
         });
    });
});

module.exports = router;
