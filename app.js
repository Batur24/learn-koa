
const koa = require('koa');
const koaNunjucks = require('koa-nunjucks-2');
const path = require('path');
const serve = require('koa-static');
const logger = require('koa-logger');
const appRouter = require('./urls');
const app = new koa();

//view setting
app.use(koaNunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),
  nunjucksConfig: {
    autoescape: true
  }
}));

//logger setting
app.use(logger());

//urls setting
app.use(appRouter.url.routes(), appRouter.url.allowedMethods());

//static file setting, should behind the urls setting
app.use(serve(__dirname + '/public'));

//database setting


app.listen(3000, function(){
    console.log('server running...')
});




