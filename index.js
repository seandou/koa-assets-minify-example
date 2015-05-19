var path = require('path');
var koa = require('koa');
var http = require('http');
var etag = require('koa-etag');
var conditional = require('koa-conditional-get');
var ejs = require('koa-ejs');
var assetsMinify = require('koa-assets-minify');

// create a koa app
var app = koa();

// use etag middleware
app.use(conditional());
app.use(etag());

// use assets-minify middleware
var config = require('./assets.config.js');
assetsMinify(app, __dirname, config);

// ejs
ejs(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layouts/default',
  viewExt: 'ejs',
  cache: false,
  debug: true
});

app.use(function *() {
  yield this.render('index');
});

var server = http.createServer(app.callback());
server.listen(3000);
console.log('open http://127.0.0.1:3000');