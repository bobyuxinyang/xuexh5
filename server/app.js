var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes');
var config = require('./config')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  // if (req.headers.origin && req.headers.origin.match(/fruitday\.com/)) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if(req.method === 'OPTIONS') {
      return res.send(200)
    }
  // }
  next();
})


app.use('/', routes)

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res
      .status(err.status || 500)
      .send({
        message: err.message,
        error: err
    })
})

var server = app.listen(config.port, function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;
