var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var index = require('./routes/index');
var pendapatan = require('./routes/pendapatan');
var pengeluaran = require('./routes/pengeluaran');
var saldo = require('./routes/saldo');
var sementara = require('./routes/sementara');
var dompet = require('./routes/dompet');
var catatan = require('./routes/catatan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/beranda', index);

app.use('/pendapatan', pendapatan)
app.use('/pengeluaran', pengeluaran)
app.use('/saldo', saldo)
app.use('/sementara', sementara)
app.use('/dompet', dompet)
app.use('/catatan', catatan)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
