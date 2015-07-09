var async = require('async')
var wechatApi = require('../utils/wechat').api

module.exports = {
  wechatJsConfig: function(req, res, next) {
    // console.log(req.headers.referer)
    var debug = req.query.debug
    wechatApi.getJsConfig({
      debug: !!debug || false,
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'
      ],
      url: req.headers.referer //todo 没找到更好的
    }, function(err, data) {
      if(err) {
        return next(err)
      }
      res.send(data)
    })
  }
}
