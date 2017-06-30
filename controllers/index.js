var connection = require('./mysql');
var isAuth = require('./../isAuth');

module.exports = {
    index: function(req, res) {
      res.render('index', { title: 'Home Page', user: req.session.user });
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

        if(data.length == ''){
          res.writeHead(404, {"Content-type":"text/html"});
          res.end('User Not Found! <a href="/login">Log In</a>');
        } else {
          req.session.isLogin = true;
          req.session.user = data[0].username;
          res.redirect('/');
        }
      });
    },
    logout: function(req, res){
      req.session.destroy(function(err){
        if(err){
          console.log(err);
        } else {
          // console.log('User Logout');
          res.redirect('/events');
        }
      });
    }
}
