var connection = require('./mysql');
var isAuth = require('./../isAuth');
var moment = require('moment');

var id = "";

module.exports = {
    index: function(req, res){
      connection.query('SELECT * FROM events', function(err, rows, field){
        if(err) throw err;

        var admin = false;
        if(isAuth.session_ID != null){ admin = true };
        res.render('events', { data: rows, moment: moment, checkUser: admin });
        // console.log(rows);
      });
    },
    addGet: function(req, res){
      if(isAuth.session_ID == null){
        res.redirect('/events');
      } else {
        res.render('add_event');
      }
    },
    addPost: function(req, res){
      if(isAuth.session_ID == null){
        res.redirect('/events');
      } else {
        var data = {
          event_name: req.body.event_name,
          descriptions: req.body.descriptions,
          event_date: req.body.event_date
        };
        connection.query('INSERT INTO events SET ?', data , function(err, field){
          if(err) throw err;

          // console.log(data);
          res.redirect('/events');
        });
      }
    },
    editGet: function(req, res){
      if(isAuth.session_ID == null){
        res.redirect('/events');
      } else {
        id = req.params.id;
        connection.query('SELECT * FROM events WHERE ?',
        { event_id : id }, function(err, rows, field){
          if(err) throw err;

          if(rows){
            res.render('edit_event', { d: rows[0], moment:moment });
          } else {
            res.writeHead(404, {"Content-type":"text/plain"});
            res.end("Page Not Found");
          }
        });
      }
    },
    editPost: function(req, res){
      if(isAuth.session_ID == null){
        res.redirect('/events');
      } else {
        var newData = {
          event_name: req.body.event_name,
          descriptions: req.body.descriptions,
          event_date: req.body.event_date
        };

        connection.query('UPDATE events SET ? WHERE ?',
        [ newData , { event_id: id } ],function(err, field){
          if(err) throw err;

          res.redirect('/events');
        });
      }
    },
    delete: function(req, res){
      if(isAuth.session_ID == null){
        res.redirect('/events');
      } else {
        connection.query('DELETE FROM events WHERE ?',
        { event_id: req.params.id },function(err, field){
          if(err) throw err;

          res.redirect('/events');
        });
      }
    },
}
