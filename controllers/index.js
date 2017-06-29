var connection = require('./mysql');

var sess = null;
var dataUser = null;

module.exports = {
    index: function(req, res, next) {
      if(sess != null){
        res.render('index', { title: 'Home Page', header: 'Welcome '+ dataUser +' !' });
      } else {
        res.send('You must login first! <a href="/login">Log In</a>');
      }
    },
    loginGet: function(req, res){
      res.render('login');
    },
    loginPost: function(req, res){
      var email = req.body.email;
      var password = req.body.password;
      connection.query('SELECT * FROM user WHERE email = ? AND password = ?',
      [ email, password ], function(err, data){
        if(err) throw err;

        if(data != null){
          sess = req.sessionID;
          dataUser = data[0].username;
          res.redirect('/');
        } else {
          console.log('User Not Found');
          res.writeHead(404, {"Content-type":"text/plain"});
          res.end('User Not Found');
        }
      });
    },
    logout: function(req, res){
      req.session.distroy();
      res.redirect('/events');
    }
}
