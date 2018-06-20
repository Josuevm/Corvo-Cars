var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var car_modelsRouter = require('./routes/car_models');
var interior_modelsRouter = require('./routes/interior_paths');
var rims_modelsRouter = require('./routes/rims_paths');
var extras_modelsRouter = require('./routes/extras_paths');
var motor_modelsRouter = require('./routes/motor_paths');
var model_modelsRouter = require('./routes/model_models');
var contact_email =require('./routes/contact_email')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/car_models', car_modelsRouter);
app.use('/rims_paths',rims_modelsRouter);
app.use('/extras_paths',extras_modelsRouter);
app.use('/motor_paths',motor_modelsRouter);
app.use('/interior_paths', interior_modelsRouter);
app.use('/model_models',model_modelsRouter);
app.use('/contact_email',contact_email);
//mongoose db connection
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');//si no sirve poner <>
mongoose.connect('mongodb://root:root@ds241039.mlab.com:41039/corvo_cars', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendfile(path.join(__dirname, 'public/dist/index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
