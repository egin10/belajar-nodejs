var express = require('express');
var router = express.Router();

router.get('/', function(req, res, connection) {
  req.getConnection(function(err,connection){       
     connection.query('SELECT * FROM contacts',function(err,rows)     {            
        if(err)
           console.log("Error Selecting : %s ",err );     
           res.json(rows);                           
         });       
    });
});

module.exports = router;
