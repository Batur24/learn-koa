
const koa = require('koa');
const koaNunjucks = require('koa-nunjucks-2');
const path = require('path');
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

app.listen(3000, function(){
    console.log('server running...')
});




