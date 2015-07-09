var config = {
  port:  process.env.NODE_ENV == 'production' ? 7777 : 3000,
  wechat: {
  	
    appid: 'wxe69304ede4a1d74c',
    secret: '149c1133385f54cf1080d88b9bde3184',

    // # newbond keys
    // appid: 'wx8d1b02c58f3a1b92',
    // secret: 'a726301e102ec7a53e6d5d67318546fc',    
  },
  redis: {
    server: '127.0.0.1',
    port: 6379
  }
}

module.exports = config