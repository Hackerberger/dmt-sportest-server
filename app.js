var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var history = require('connect-history-api-fallback');


var app = express();

app.use(
  history({
    verbose: true,
  }),
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

module.exports = app;
