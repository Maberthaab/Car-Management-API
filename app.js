/*import express from "express";
import db from "./config/database.js";
import router from "./routes/routes.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected... ');
  
} catch (error) {
    console.error(error);
}

app.use(express.json());
app.use(router);
app.listen(5000, ()=> console.log('server running at port 5000'));

*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/UserRoutes');
var carsRouter = require('./routes/CarRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/UserRoutes', UserRouter);
app.use('/CarRoutes', CarRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
