module.exports = {
  assetsPath: 'assets',
  tempPath: 'tmp',
  maxBuffer: 2000 * 1024,
  maxAge: 24* 3600 * 1000,
  baseUrl: '/',
  compression: true,

  js: {
    app: [
      'js/jquery-2.1.4.js',
      'js/bootstrap.js'
    ]
  },

  css: {
    app: [
      'css/bootstrap.css',
      'css/app.css'
    ]
  }

};
