var connection = require('./mysql');
var isAuth = require('./../isAuth');

module.exports = {
    index: function(req, res) {
      if(isAuth.session_ID != null){
        res.render('index', { title: 'Home Page', header: 'Welcome '+ isAuth.dataUser +' !' });
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
          isAuth.session_ID = req.sessionID;
          isAuth.dataUser = data[0].username;
          res.redirect('/');
        } else {
          console.log('User Not Found');
          res.writeHead(404, {"Content-type":"text/plain"});
          res.end('User Not Found');
        }
      });
    },
    logout: function(req, res){
      req.session.destroy(function(err){
        if(err){
          console.log(err);
        } else {
          // console.log('User Logout');
          isAuth.session_ID = null;
          res.redirect('/events');
        }
      });
    }
}
