var express = require('express');
var path = require('path');
var swig = require('swig');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var eSession = require('express-session');

var app = express()

// view engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

//========= MIDDLEWARE
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(eSession({
  secret : 'Secret',
  resave : false,
  saveUninitialized : false
}));
app.use(express.static(path.join(__dirname, 'public')));


//=========== ROUTER
var routes = require('./routes/index');
var events = require('./routes/events');

app.use('/', routes);
app.use('/events', events);

app.use('*', function(req, res){
  res.writeHead(404, {'Content-type':'text/plain'});
  res.end('Page Not Found');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
