/**
 * Created by batur on 2017/1/28.
 */
const router = require('koa-router')();
const index = require('./controller/index');

router.get('/', index.home);
router.get('/test/', index.test);


module.exports={
  url: router
}

