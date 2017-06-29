var connection = require('./mysql');

var id = "";

module.exports = {
    index: function(req, res){
      connection.query('SELECT * FROM events', function(err, rows, field){
        if(err) throw err;

        res.render('events', { data: rows });
        // console.log(rows);
      });
    },
    addGet: function(req, res){
        res.render('add_event');
    },
    addPost: function(req, res){
        var data = {
          event_name: req.body.event_name,
          descriptions: req.body.descriptions
        };
        connection.query('INSERT INTO events SET ?', data , function(err, field){
          if(err) throw err;

          // console.log(data);
          res.redirect('/events');
        });
    },
    editGet: function(req, res){
      id = req.params.id;
      connection.query('SELECT * FROM events WHERE ?',
      { event_id : id }, function(err, rows, field){
        if(err) throw err;

        if(rows){
          res.render('edit_event', { d: rows[0] });
        } else {
          res.writeHead(404, {"Content-type":"text/plain"});
          res.end("Page Not Found");
        }
      });
    },
    editPost: function(req, res){
      var newData = {
        event_name: req.body.event_name,
        descriptions: req.body.descriptions
      };

      connection.query('UPDATE events SET ? WHERE ?',
      [ newData , { event_id: id } ],function(err, field){
        if(err) throw err;

        res.redirect('/events');
      });
    },
    delete: function(req, res){
      connection.query('DELETE FROM events WHERE ?',
      { event_id: req.params.id },function(err, field){
        if(err) throw err;

        res.redirect('/events');
      });
    },
}
