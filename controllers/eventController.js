var connection = require('./../mysql');

module.exports = {
    index: function(req, res){
      connection.query('SELECT * FROM events', function(err, rows, field){
        if(err) throw err;

        res.render('events', { data: rows });
        console.log(rows);
      });
    },
    addGet: function(req, res){
        res.render('add_event');
    },
    addPost: function(req, res){
        var data = {
          event_name: req.body.name_event,
          descriptions: req.body.descriptions,
          event_date: req.body.event_date
        };
        connection.query('INSERT INTO events SET ?', data , function(err, field){
          if(err) throw err;

          console.log(data);
          res.redirect('/events');
        });
    },
}
