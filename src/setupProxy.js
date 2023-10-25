const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Add your proxy configuration here
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://healthkangaroo.com', // The target API URL
      changeOrigin: true,
    })
  );
};