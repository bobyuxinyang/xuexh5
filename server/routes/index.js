var express = require('express')
var router = express.Router()

var common = require('../controllers/common')

router.get('/wechat/jsconfig', common.wechatJsConfig)

module.exports = router
