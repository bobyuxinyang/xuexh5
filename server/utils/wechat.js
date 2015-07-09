var OAuth = require('wechat-oauth')
var Api = require('wechat-api')
var request = require('superagent')

function Wechat() {
  this.oauth = null
}

Wechat.prototype.connect = function () {
  var appid = arguments[0]
  var secret = arguments[1]
  this.oauth = new OAuth(appid, secret)
  this.api = new Api(appid, secret)
}

module.exports = new Wechat