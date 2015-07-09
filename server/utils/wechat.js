
var config = require('../config')

var redis = require('redis')
var redisConfig = config.redis

var client = redis.createClient(redisConfig.port, redisConfig.server)
client.on('error', function(err) {
  console.error(err)
})
client.on('connect', function(err) {
  console.info('redis connect..')
})
var RedisService = client


var wechatApi = require('wechat-api')
var wechatConfig = config.wechat
console.log("wechat config is: ", wechatConfig)

var redisAccessTokenKey = 'xuexh5:wechat:token'

//过期时间不准确 提前一点
wechatApi.AccessToken.prototype.isValid = function() {
  return !!this.accessToken && (new Date().getTime()) < (this.expireTime - 3600000)
}

var WechatApiService = new wechatApi(wechatConfig.appid, wechatConfig.secret, function(callback) {
  RedisService.get(redisAccessTokenKey, function(err, token) {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(token))
  })
}, function(token, callback) {
  RedisService.set(redisAccessTokenKey, JSON.stringify(token), callback)
})


module.exports = WechatApiService