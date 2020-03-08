const { createProxyMiddleware } = require('http-proxy-middleware')

function proxy(target) {
  return createProxyMiddleware({
    target,
    changeOrigin: true
  })
}

module.exports = function(app) {
  app.use('/api', proxy('https://www.wanted.co.kr'))
  app.use('/3.0', proxy('https://us11.api.mailchimp.com'))
}
