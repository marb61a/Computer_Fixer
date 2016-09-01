var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var routes = require('./routes/index');
var about = require('./routes/about');
var services = require('./routes/services');
var contact = require('./routes/contact');

var app = express();

// sets up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

module.exports = app;
