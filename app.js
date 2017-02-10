
const koa = require('koa');
const koaNunjucks = require('koa-nunjucks-2');
const path = require('path');
const serve = require('koa-static');
const logger = require('koa-logger');
const appRouter = require('./urls');
const app = new koa();
const Sequelize = require('sequelize');
const config = require('./config/db-config');

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
sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      {
        host: config.host,
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          idle: 3000
        }
      });

app.listen(3000, function(){
    console.log('server running...')
});

//module.exports = sequelize;




