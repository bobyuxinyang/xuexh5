var config = {
  port:  process.env.NODE_ENV == 'production' ? 7777 : 3000,
  wechat: {
    appid: 'wx7544dba9d7a2a7d9',
    secret: 'd3895138041a24bd4c26e1999b548518',
  }
}

module.exports = config