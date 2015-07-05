var express = require('express')
var router = express.Router()

require('./orange.js')(router)
require('./admin.js')(router)
require('./common.js')(router)

router.get('/', function(req, res, next) {
  res.render('index', { title: '我是你爸爸' });
})

module.exports = router
