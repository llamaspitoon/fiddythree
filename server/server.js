var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var scheduleRouter = require('./routes/schedule');
var picksRouter = require('./routes/picks');

var config = require('./config');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function() {
	console.error('MongoDB connection error');
});
db.once('open', function () {
	console.log('MongoDB connection established.');
});

// point to /dist to deliver the angular app
app.use(express.static(path.join(__dirname, '../dist/fiddy-fiddy')));
app.use('/api/schedule', scheduleRouter);
app.use('/api/picks', picksRouter);
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/fiddy-fiddy/index.html'));
});

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
